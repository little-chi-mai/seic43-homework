# # Nucleotide Count

# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.

# Write a program that will tell you how many times each nucleotide occurs in a string.

# It should also tell you if a character in the string is _not_ a valid nucleotide.

# Example:

# ```ruby
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21
# ```

# ## Source
# The _Calculating DNA Nucleotides_ problem at [Rosalind](http://rosalind.info/problems/dna/)

def count_nucleotides string
    nucleotides = {
        'A' => 0,
        'C' => 0,
        'G' => 0,
        'T' => 0,
        'error' => 0
    }

    # loop through string
    string.each_char do |char|
        if nucleotides.keys.include? char
            nucleotides[char] += 1
        else 
            nucleotides['error'] += 1
        end
    end

    # loop through hash
    nucleotides.map { |k, v| puts "#{k}: #{v}" }

end

count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"