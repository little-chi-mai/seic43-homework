class Magic8Controller < ApplicationController
   
    def magic8
        @input = params[:input]
        @number = rand(0..8);
        @answers = ["Yes, you're right", "blah blah..", "Undoubtedly", "Ah I see.. Yes..", "Most likely", "Not too good", "Very doubtful"];
        @answer = @answers[@number]
    end

end