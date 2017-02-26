Rails.application.routes.draw do
  scope path: 'api' do
    resources(:beaches)
  end
end
