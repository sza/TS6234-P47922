# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_pelajar_session',
  :secret      => '1481ec1ae3673c257fca9a3ca8f2fb7ed567137a747332c5f73969918d7de607d6530d0b6b82335770152ee2cfbc67fb8f44dec7128d3cf4362870aad58ea94c'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
