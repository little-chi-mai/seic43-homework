require 'pry'

def planTrip(getOnLine, getOnStop, getOffLine, getOffStop)
  $lines = {
    'N' => {
      'stops' => [
        'Times Square',
        '34th',
        '28th',
        '23rd',
        'Union Square',
        '8th',
      ],
    },
    'L' => {
      'stops' => ['8th', '6th', 'Union Square', '3rd', '1st'],
    },
    '6' => {
      'stops' => [
        'Grand Central',
        '33rd',
        '28th',
        '23rd',
        'Union Square',
        'Astor Place',
      ],
    },
  }

  def showStopNumberToGoThroughOnOneLine(
    lineName,
    getOnStopName,
    getOffStopName
  )
    stopsOfTheLine = $lines[lineName]['stops']
    getOnIndex = stopsOfTheLine.index getOnStopName
    getOffIndex = stopsOfTheLine.index getOffStopName
    indexDifference = getOffIndex - getOnIndex
    stopNumberToGoThroughOnOneLine = indexDifference.abs

    stopNumberToGoThroughOnOneLine
  end

  def showStopsToGoThroughOnOneLine(lineName, getOnStopName, getOffStopName)
    stopsOfTheLine = $lines[lineName]['stops']
    getOnIndex = stopsOfTheLine.index getOnStopName
    getOffIndex = stopsOfTheLine.index getOffStopName
    indexDifference = getOffIndex - getOnIndex
    stopsToGoThroughOnOneLine = ''

    if indexDifference > 0
      i = 0
      until i >= indexDifference
        stopsToGoThroughOnOneLine += stopsOfTheLine[getOnIndex + i + 1] + ', '
        i += 1
      end
    else
      i = 0
      until i >= (indexDifference * -1)
        stopsToGoThroughOnOneLine += stopsOfTheLine[getOnIndex - i - 1] + ', '
        i += 1
      end
    end

    return stopsToGoThroughOnOneLine
  end

  if (getOnLine == getOffLine || getOffStop == 'Union Square')
    puts(
      "You must travel through the following stops on the #{getOnLine} line: #{
        showStopsToGoThroughOnOneLine(getOnLine, getOnStop, getOffStop)
      }"[
        0..-3
      ] + '.',
    )

    puts(
      "#{
        showStopNumberToGoThroughOnOneLine(getOnLine, getOnStop, getOffStop)
      } stops in total.",
    )
  else
    if (getOnStop == 'Union Square')
      puts(
        "You must travel through the following stops on the #{getOffLine} line: #{
          showStopsToGoThroughOnOneLine(getOffLine, 'Union Square', getOffStop)
        }"[
          0..-3
        ] + '.',
      )

      puts(
        "#{
          showStopNumberToGoThroughOnOneLine(
            getOffLine,
            'Union Square',
            getOffStop,
          )
        } stops in total.",
      )
    else
      puts(
        "You must travel through the following stops on the #{getOnLine} line: #{
          showStopsToGoThroughOnOneLine(getOnLine, getOnStop, 'Union Square')
        }"[
          0..-3
        ] + '.',
      )

      puts("Change to #{getOffLine} Line at Union Square")

      puts(
        "Your journey continues through the following stops: #{
          showStopsToGoThroughOnOneLine(getOffLine, 'Union Square', getOffStop)
        }"[
          0..-3
        ] + '.',
      )

      puts(
        "#{
          showStopNumberToGoThroughOnOneLine(
            getOnLine,
            getOnStop,
            'Union Square',
          ) +
            showStopNumberToGoThroughOnOneLine(
              getOffLine,
              'Union Square',
              getOffStop,
            )
        } stops in total.",
      )
    end
  end
end


# test

# planTrip("N", "Times Square", "N", "8th");
# planTrip('L', '6th', 'L', '3rd')
# planTrip("L", "3rd", "L", "6th");
# planTrip("6", "Astor Place", "6", "Grand Central");

planTrip('6', 'Astor Place', 'N', 'Times Square')

#  should return: overall stops 5, "Union Square", "change to N Line, "23rd", "28th", "34th", "Times Square"

# planTrip("6", "Union Square", "N", "Times Square");
# planTrip("L", "1st", "6", "Union Square");
