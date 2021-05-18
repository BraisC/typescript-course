declare type CourseGoal = {
    title: string;
    description: string;
    completeUntil: Date;
};
declare function createCourseGoal(title: string, description: string, date: Date): CourseGoal;
declare const names: Readonly<string>[];
