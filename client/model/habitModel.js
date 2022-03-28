class Habit{
    constructor(data){
        this.habitName = data.habitName
        this.habitFrequency = data.habitFrequency
        this.habitUnit = data.habitUnit
        this.habitCompletion = data.habitCompletion
    }
    static create(habit){
        return new Promise (async (resolve,reject) => {
            try{ //To complete when db is finished
                let newHabitData = await db.query('INSERT INTO habit ',[habit.habitName,habit.habitFrequency,habit.habitUnit,habit,habitCompletion])
                resolve(newHabit)
            } catch {
                reject('Could not add new habit')
            }
        })
    }
}
