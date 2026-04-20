# GAia Edge Agent - Ruby Leve
class EdgeAgent
  def initialize(creator)
    @creator = creator
    @contributions = []
  end
  
  def register_idea(idea)
    @contributions << {
      creator: @creator,
      idea: idea,
      timestamp: Time.now,
      status: "pending_review"
    }
  end
  
  def calculate_reward
    @contributions.size * 10 # Unidade mínima
  end
end

# Uso:
agent = EdgeAgent.new("Antônio Alberto Lopes Elias - CRO-45849")
agent.register_idea("Remuneração de Borda Soberana")
puts "Reward: #{agent.calculate_reward}"