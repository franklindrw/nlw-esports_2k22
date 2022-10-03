function convertHoursToMinutes(time: string){
    const [hours, minutes] =  time.split(':').map(Number);
    const minutesAmount = (hours * 60) + minutes;

    return minutesAmount;
}

export default convertHoursToMinutes;