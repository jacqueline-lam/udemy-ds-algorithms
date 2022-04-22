/*
Your company built an in-house calendar tool called HiCal.
You want to add a feature to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting.
In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime.
These integers represent the number of 30-minute blocks past 9:00am.

For example:
{ startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm


Write a function mergeRanges() that takes an array of multiple meeting time ranges
 and returns an array of condensed ranges.

For example, given:
  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

your function would return:
  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]

*Do not assume the meetings are in order.*
The meeting times are coming from multiple teams.

*Write a solution that's efficient even when we can't put a nice upper bound
on the numbers representing our time ranges.*

Here we've simplified our times down to the number of 30-minute slots past 9:00 am.
But we want the function to work even for very large numbers,
like Unix timestamps.

In any case, the spirit of the challenge is to merge meetings where startTime and endTime
don't have an upper bound.

*/

/*
Gotchas
Look at this case:
  [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]


These meetings should probably be merged, although they don't exactly "overlap"—
they just "touch." Does your function do this?

Look at this case:
  [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]

Notice that although the second meeting starts later,
it ends before the first meeting ends.
Does your function correctly handle the case where a later meeting is "subsumed by"
an earlier meeting?

Look at this case:
  [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
]

Here all of our meetings should be merged together into just
{ startTime: 1, endTime: 10 }.
We need keep in mind that after we've merged the first two
we're not done with the result—
the result of that merge may itself need to be merged into other meetings as well.

Make sure that your function won't "leave out" the last meeting.

We can do this in O(nlgn) time.

*/
// Leetcode solution
// O(NlogN) Time and O(N) Space
function mergeRanges(timeRanges) {
  // sort meetings in order by startingTime
  timeRanges.sort((a, b) => a.startTime - b.startTime) // see explanation below
  let prev = timeRanges[0];
  let condensedRanges = [prev];

  for (let i = 1; i < timeRanges.length; i++) {
    let curr = timeRanges[i];
    // merge overlapping ranges whenever curr startTime < prev endTime
    if (curr['startTime'] <= prev['endTime']) {
      prev['endTime'] = Math.max(prev['endTime'], curr['endTime'])
    } else {
      condensedRanges.push(curr)
      prev = curr;
    }
  }

  return condensedRanges;
}

// sort explanation
// function compare( a, b ) {
//   if ( a.startTime < b.startTime ){
//     return -1;
//   }
//   if ( a.startTime > b.startTime ){
//     return 1;
//   }
//   return 0;
// }

// objs.sort( compare );

// =================================================
/*
Interview Cake solution
A) Treat meeting w/ earlier start time as first, the other as second
B) If end time of first meeting >= start time of of second meeting,
we merge the 2 meetings into 1 time range.
Resulting time range 's start time = first meeting's start,
and its end time = max of the two meetings' end times;


We sort input array of meetings by start time so any meetings that
 might need to be merged are not NEXT to each other

 Then we walk thru sorted meetings from left to right. At each iteration:
 1) Merge current meeting with previous one
 2) Can't merge curr with prev meeting, so prev meeting can'tbe merged with ANY FUTURE meetings
 and we throw the curr meeting into mergedMeetings
 */


function mergeRanges(meetings) {
  // Create a deep copy of the meetings array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
  // Thought: Why not const copy = [...meetings];?
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // Sort by start time
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // If the current meeting overlaps with the last merged meeting, use the
    // later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {

      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}




/*
-Complexity-
O(NlogN) time and O(n) space.

Even though we only walk through our array of meetings once to merge them,
we sort all the meetings first, giving us a RUNTIME of O(nlgn).
It's worth noting that if our input were sorted,
we could skip the sort and do this in O(n) time!

We create a new array of merged meeting times.
In the worst case, none of the meetings overlap,
giving us an array identical to the input array.
Thus we have a worst-case SPACE cost of O(n).

-Bonus-
What if we did have an upper bound on the input values?
Could we improve our runtime? Would it cost us memory?

Could we do this "in place" on the input array and save some space?
What are the pros and cons of doing this in place?
 */