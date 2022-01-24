function solution(participant, completion) {
    let answer = '';

    participant.sort();
    completion.sort();

    for(let i = 0;i<participant.length;i++)
    {
        if(participant[i] !== completion[i])
        {
            answer = participant[i];
            return answer;
        }
    }
}
console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]));