json.errors do
  json.email []
  json.password []
  json.general []
  json.email @errors[:email].map { |e| "Email " + e } if @errors[:email]
  json.password @errors[:password].map { |e| "Password " + e } if @errors[:password]
  json.general @errors[:general] if @errors[:general]
end