-- Create Database
CREATE DATABASE investment_planner;

-- Connect to the newly created database
\c investment_planner;

-- Create Users Table
CREATE TABLE user_data (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    user_type VARCHAR(20) DEFAULT 'default', -- Options: 'admin', 'default', 'upgraded'
    investor_type VARCHAR(20) DEFAULT 'Moderate Investor',
    country VARCHAR(3),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    remaining_tokens INT DEFAULT 200 -- Default Initial tokens for new users                     
);
COMMENT ON TABLE user_data IS 'Stores user information such as username, password (hashed), email, and other relevant personal details.';
COMMENT ON COLUMN user_data.user_type IS "For instances, admin has unlimited tokens, it can log the consume of tokens, but isn't limited by a balance";
COMMENT ON COLUMN user_data.country IS "3 letter country code, eg.: USA, BRA, CAN, for Portugal it will have some customized API's and 
for other countries it'll try to suggest some local assets if the user wants them";
COMMENT ON COLUMN user_data.investor_type IS "User can choose its investor type from a list ['Conservative Investor', 'Moderate Investor', ...] 
which will be used to suggest some default preferences and asset classes";

-- Create default Investment Preferences Table for each investor type
CREATE TABLE default_investment_preferences (
    investor_type VARCHAR(50) PRIMARY KEY REFERENCES investor_types(investor_type_name),
    risk_tolerance VARCHAR(20) NOT NULL,
    inv_perc_growth_rate NUMERIC(3, 2) NOT NULL,
    investment_horizon_years NUMERIC(3, 4) NOT NULL,
    preferred_asset_classes TEXT[] NOT NULL,
    investment_goals TEXT[] NOT NULL,
    strategy_adjustment_trigger JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Investment Preferences Table
CREATE TABLE investment_preferences (
    preference_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES user_data(user_id) NOT NULL,
    risk_tolerance VARCHAR(20) NOT NULL,
    preferred_currency VARCHAR(3) NOT NULL DEFAULT 'EUR',
    initial_investment NUMERIC(10, 2),
    inv_perc_growth_rate NUMERIC(3, 2) NOT NULL,
    investment_horizon_years NUMERIC(3, 4) NOT NULL,
    preferred_asset_classes TEXT[] NOT NULL,
    strategy_adjustment_trigger JSONB NOT NULL, 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL
);
COMMENT ON TABLE investment_preferences IS 'Stores user-specific investment preferences, including risk tolerance, preferred asset classes, and investment goals.';

COMMENT ON COLUMN investment_preferences.preferred_asset_classes IS 'Array of text with preferred asset classes, eg.: ["Cryptocurrency","Stocks"]';
COMMENT ON COLUMN investment_preferences.investment_goals IS 'Array of text with investment goals, eg.: ["Financial Independence","Retirement"]';
COMMENT ON COLUMN investment_preferences.initial_investment IS 'Can be null if a user already has an Asset portfolio';
COMMENT ON COLUMN investment_preferences.preferred_asset_classes IS 'ML model will suggest some asset classes based on the user type (and country if provided)';
COMMENT ON COLUMN investment_preferences.investment_goals IS 'Mostly used for app statistics, if users do not want to explicit it will be defaulted to ["Wealth Growth"]';

-- Create Investment Plans Table
CREATE TABLE investment_plans (
    plan_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES user_data(user_id) NOT NULL,
    is_current BOOLEAN NOT NULL,
    plan_details JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_current_plan UNIQUE (user_id, is_current)
);
COMMENT ON TABLE investment_plans IS 'Tracks changes in user investment plans over time for optimization and analysis.';

-- Create Asset Portfolio Table
CREATE TABLE asset_portfolios (
    portfolio_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES user_data(user_id) UNIQUE NOT NULL,
    asset_portfolio JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE asset_portfolio IS 'Stores current assets in the user''s portfolio inside a JSON file format that includes the buying price, acquisition date, 
quantity, asset symbol and asset type (might change it to separate before like portfolio = {crypto:{buying_price: x, acquisition_date: full_date, quantity: y, asset symbol:''ETH''}}, stocks:{},IFTS:{}})';

-- WON'T BE NEEDED IF A REMOTE STORAGE SOLUTION IS USED, only for testing purposes

-- Create Asset Types Table
CREATE TABLE asset_types (
    asset_type_id SERIAL PRIMARY KEY,
    asset_type_name VARCHAR(50) UNIQUE NOT NULL,
    update_rate VARCHAR(30) NOT NULL
);

COMMENT ON TABLE asset_types IS 'Stores different types of financial assets';
COMMENT ON COLUMN asset_types.update_rate IS 'Frequency of price updates: Intraday, Daily, or Minute';

-- Create Assets Table
CREATE TABLE assets (
    asset_id SERIAL PRIMARY KEY,
    asset_type_id INT NOT NULL REFERENCES asset_types(asset_type_id),
    symbol VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

COMMENT ON TABLE assets IS 'Stores information about individual financial assets';

-- Create Price Data Table for 1-Second Updates
CREATE TABLE price_data_1s (
    price_id SERIAL PRIMARY KEY,
    asset_symbol VARCHAR(20) NOT NULL REFERENCES assets(symbol),
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    price NUMERIC NOT NULL,
    volume NUMERIC NOT NULL,  -- Assuming fractional volumes are possible
    UNIQUE(asset_symbol, timestamp)
);

COMMENT ON TABLE price_data_1s IS 'Stores price data for assets with 1-second updates';

-- Create Price Data Table for 1-Minute Updates
CREATE TABLE price_data_1m (
    price_id SERIAL PRIMARY KEY,
    asset_symbol VARCHAR(20) NOT NULL REFERENCES assets(symbol),
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    price NUMERIC NOT NULL,
    volume NUMERIC NOT NULL,  -- Assuming fractional volumes are possible
    UNIQUE(asset_symbol, timestamp)
);

COMMENT ON TABLE price_data_1m IS 'Stores price data for assets with 1-minute updates';

-- Create Price Data Table for 5-Minute Updates
CREATE TABLE price_data_5m (
    price_id SERIAL PRIMARY KEY,
    asset_symbol VARCHAR(20) REFERENCES assets(symbol),
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    price NUMERIC NOT NULL,
    volume NUMERIC NOT NULL,  -- Assuming fractional volumes are possible
    UNIQUE(asset_symbol, timestamp)
);

COMMENT ON TABLE price_data_5m IS 'Stores price data for assets with 5-minute updates';

-- Create Daily Price Data Table
CREATE TABLE daily_price_data (
    price_id SERIAL PRIMARY KEY,
    asset_symbol VARCHAR(20) REFERENCES assets(symbol),
    date DATE NOT NULL,
    open_price NUMERIC NOT NULL,
    high_price NUMERIC NOT NULL,
    low_price NUMERIC NOT NULL,
    close_price NUMERIC NOT NULL,
    volume BIGINT NOT NULL,  -- Whole number assumed for daily trading volume
    UNIQUE(asset_symbol, date)
);

COMMENT ON TABLE daily_price_data IS 'Stores daily price data for assets with daily updates';

-- Insert Asset Types with Update Rates
INSERT INTO asset_types (asset_type_name, update_rate) VALUES
('Stocks', '1 minute'),
('Cryptocurrencies', '1 second'),
('Bonds', '5 minutes'),
('REITs', '5 minutes'),
('ETFs', '1 minute'),
('Commodities', '1 minute'),
('FOREX', '1 second'),
('Options', '1 minute'),
('Futures', '1 minute'),
('Mutual Funds', 'Daily (after market close)'),
('Government Securities', 'Daily (after market close)'),
('Corporate Bonds', 'Daily (after market close)'),
('Derivatives', '1 minute');


--Token based operations 
CREATE TABLE token_costs (
    operation_id SERIAL PRIMARY KEY,
    operation_name VARCHAR(100) NOT NULL,
    token_cost INT NOT NULL,
    description TEXT
);

INSERT INTO  token_costs (operation_name, token_cost, description) VALUES
('Store User Portfolio', 0, 'No cost for storing user-defined portfolios.'),
('Create ML-generated Portfolio', 10, 'Cost for generating portfolio using deep learning.'),
('Set Initial Investment Preferences', 0, 'No cost for first-time setup of preferences.'),
('Update Investment Preferences', 1, 'Cost for updating investment preferences.'),
('Generate Investment Plan', 5, 'Cost for generating a new investment plan.'),
('Store Investment Plans (up to 10)', 0, 'Free storage for the first 10 investment plans.'),
('Generate Additional Investment Plans', 5, 'Cost for generating each additional investment plan beyond the first 10.'),
('Update Investment Plans', 2, 'Cost for updating existing investment plans.'),
('Delete Investment Plans', 0, 'No cost for deleting investment plans.'),
('Perform Portfolio Optimization/Risk Management', 5, 'Cost for performing optimization or risk management.');

-- Table to log user activities
CREATE TABLE user_activity_logs (
    activity_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES user_data(user_id),
    operation_name VARCHAR(100) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    token_transaction INT NOT NULL,
    remaining_tokens INT NOT NULL
);

COMMENT ON TABLE user_activity_logs IS 'Logs each user action, including operation name, timestamp, tokens spent, and remaining tokens.';

-- Table to track user session information
CREATE TABLE user_sessions (
    session_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES user_data(user_id),
    session_start TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    session_end TIMESTAMP WITH TIME ZONE,
    duration INT NOT NULL --in seconds
);

COMMENT ON TABLE user_sessions IS 'Tracks user session details including start and end times and duration.';

-- Table to collect user feedback
CREATE TABLE user_feedbacks (
    feedback_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES user_data(user_id),
    feedback_text TEXT NOT NULL,
    submission_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE user_feedbacks IS 'Stores user feedback and suggestions for app improvement.';

-- Table to record distinct user counts for operations
CREATE TABLE distinct_user_counts (
    record_date DATE NOT NULL,
    operation_name VARCHAR(255) NOT NULL,
    distinct_user_count INT NOT NULL,
    PRIMARY KEY (record_date, operation_name)
);

COMMENT ON TABLE distinct_user_counts IS "Records the number of unique users performing specific operations on a given date, it's useful for website analytics such as understanding user experience.";

-- psql -U postgres -d postgres -f /path/to/setup.sql
-- psql -U admin_user -d investment_planner -f investment-analysis-app\Database_queiries.sql