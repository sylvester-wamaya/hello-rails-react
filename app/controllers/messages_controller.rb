class MessagesController < ApplicationController
  before_action :set_message, only: %i[show edit update destroy]

  # GET  /messages.json
  def index
    random_greeting = Message.order('RANDOM()').limit(1)
    render json: random_greeting
  end
end
