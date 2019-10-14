if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "login_app", domain: "https://ll-login-app.herokuapp.com"
else
  Rails.application.config.session_store :cookie_store, key: "_login_app"
end
