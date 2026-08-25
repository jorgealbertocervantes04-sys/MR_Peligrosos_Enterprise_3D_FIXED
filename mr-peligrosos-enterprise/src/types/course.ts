export type ModuleId=0|1|2|3|4|5|6;
export type QuizOption={id:string;label:string;isCorrect?:boolean;explanation?:string};
export type QuizQuestion={id:string;prompt:string;hint?:string;options:QuizOption[];points:number};
export type CourseModule={id:ModuleId;title:string;shortTitle:string;eyebrow:string;duration:string;objective:string};
export type AnswerRecord={moduleId:ModuleId;questionId:string;optionId:string;correct:boolean;points:number;answeredAt:string};
export type EventRecord={type:string;moduleId:ModuleId;payload:Record<string,unknown>;createdAt:string};
export type ExamResult={score:number;maxScore:number;percentage:number;passed:boolean;completedAt:string};
