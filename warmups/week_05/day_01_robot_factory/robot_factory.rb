# # Robot Factory 🤖

# You run a robot factory. As robots are created, they roll off the conveyor belt as empty, mindless husks of machinery -- until you first boot them up.

# The first time you boot them up, a random name is randomly generated, and assigned to itself by the robot.

# Names typically take the format of things like "BX777" or "SD234".

# For instance:
# ```rb
# robot1 = Robot.new

# puts robot1.name
# => "BX777"

# robot2 = Robot.new

# puts robot2.name
# => "SD234"

# puts robot2.name
# => "SD234"
# ```

# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gives a new name.

# if I say:
# ```rb
# robot3 = Robot.new

# puts robot3.name
# => "RF629"

# robot3.reset

# puts robot3.name
# => "ZC532"
# ```
# ## Extensions 🧯

# ### Counters 🔢
# It's important that we not overwork our robots. While resetting to factory defaults is great, the wear and tear on the robot mechanisms doesn't go away.

# For every action our robot takes, we should keep track of it.

# ```rb
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name

# robot3.reset
# puts robot3.name
# puts robot3.name

# puts robot3.instruction_count
# => 5
# ```

# ### Robot Time ⌚️
# Number of instructions is important, but so is the total age of the robot.
# ```rb
# robot3 = Robot.new
# puts robot3.timers
# => "21 seconds since last boot, 21 seconds since creation"

# robot3.reset
# puts robot3.timers
# => "8 seconds since last boot, 29 seconds since creation"
# ```

# reference about Epoch time https://en.wikipedia.org/wiki/Unix_time
# Time.to_i reference https://ruby-doc.org/core-2.6.3/Time.html#method-i-to_i

require 'pry'

class Robot
    # attr_reader :name

    def initialize
        @name = random_name
        @instruction_count = 0
        @created_at = Time.now.to_i  # Reference above
        @reset_at = Time.now.to_i
    end

    # getter
    def name
        @instruction_count += 1
        puts "My name is #{@name}"
    end

    # getter
    def reset
        @instruction_count += 1
        @name = random_name
        @reset_at = Time.now.to_i
    end

    # getter
    def instruction_count
        puts "Instruction count: #{@instruction_count}"
    end

    # getter
    def timers
        @instruction_count += 1

        @reset_time = Time.now.to_i - @reset_at
        @create_time = Time.now.to_i - @created_at

        @message = "#{@reset_time} seconds since last boot, #{@create_time} seconds since creation"
    end

    # function to generate random name
    def random_name
        letters = ('AA'..'ZZ').to_a.sample()
        digits = ('000'..'999').to_a.sample()
        letters + digits
    end

end



binding.pry