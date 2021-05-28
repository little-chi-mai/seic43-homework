# # Jumping On Clouds

# ## Scenario
# There is a new mobile game that starts with an array of clouds.
# Some of the clouds are thunderstorms, and must be avoided. The player will start at the first cloud, and must jump their way to the end of the clouds.
# Each jump, player can jump to the cloud 1 or 2 indices away from their current cloud, and must avoid the thunderstorms.

# Given the array of clouds, write a function that determines the minimum number of jumps that the player needs to jump to the end, to win the game.
# You can assume that players can always win the game.

# ## Example
# You are given the array of clouds. 0 for normal clouds, 1 for thunderstorms.
# ```
# jumpingOnClouds [0, 1, 0, 0, 0, 1, 0]
# # => expect to return 3
# ```
# In this case, player must avoid the clouds at index 1 and 5.
# They could follow the path, 
# ```
# 0 -> 2 -> 4 -> 6
# or
# 0 -> 2 -> 3 -> 4 -> 6
# ```
# The first takes 3 jumps, while the second requires 4. Therefore, your function should return 3.

# ## Sample cases
# ```
# jumpingOnClouds [0, 0, 1, 0, 0, 1, 0]
# # => expect to return 4, followed the path 0 -> 1 -> 3 -> 4 -> 6.
# ```
# <img width="281" alt="Screen Shot 2021-05-23 at 10 16 50 pm" src="https://user-images.githubusercontent.com/71913104/119260091-9334a200-bc14-11eb-895f-f85509291eba.png">


def jumping_on_clouds arr
  jump_count = 1
  # create a duplicated array
  jump_arr = arr.dup
  # mark the first cloud as the first jump
  jump_arr[0] = 'J' #jump
  #mark the last loud as the last jump
  jump_arr[-1] = 'E' #end
  p jump_arr

  jump_arr.map.with_index do |cloud, i|
      if cloud == 'J'
          if jump_arr[i + 2] == 0 
              jump_arr[i + 2] = 'J'
              jump_count += 1
          elsif jump_arr[i + 1] == 0 && jump_arr[i + 2] == 1
              jump_arr[i + 1] = 'J'
              jump_count += 1
          end
      end
      break if jump_arr[i + 2] == 'E'
  end
  p jump_arr
  p jump_count
end

# jumping_on_clouds [0, 1, 0, 0, 0, 1, 0]
# jumping_on_clouds [0, 0, 0, 0, 1, 0]
# jumping_on_clouds [0, 0, 1, 0, 0, 1, 0]
# jumping_on_clouds [0, 0]
jumping_on_clouds [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]

