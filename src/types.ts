export interface Option { id:string; label:string; text:string }
export interface Question { id:string; subjectId:string; chapterId:string; conceptId:string; type:"single"|"multiple"; requiredAnswers:number; question:string; options:Option[]; correctAnswerIds:string[]; explanation:string; trap:string; difficulty:number; tags:string[]; frequency:number; qualityStatus:"clean"|"ambiguous"|"needs_review" }
export interface Knowledge { id:string; subjectId:string; chapterId:string; title:string; summary:string[]; traps:string[] }
export interface Chapter { id:string; subjectId:string; title:string }
export interface SubjectData { id:string; code:string; name:string; color:string; icon:string; questions:Question[]; knowledge:Knowledge[]; chapters:Chapter[]; stats:{questions:number;clean:number;concepts:number;chapters:number} }
export interface SubjectManifest { id:string;code:string;name:string;color:string;icon:string;stats:SubjectData["stats"] }
