# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_ticket_session',
  :secret      => 'a70d9208f3fd6edec989bb500d5e844a6d40713b5fd842c889b86f5b0cb2fa6e5f856ebcc849dceda6c338e0339ae6ab04d7a5f902419c36d484d54c5b47597a'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
