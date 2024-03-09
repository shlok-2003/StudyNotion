import React from 'react';
import knowProgress from '/assets/Images/Know_your_progress.png';
import compare from '/assets/Images/Compare_with_others.png';
import planLesson from '/assets/Images/Plan_your_lessons.png';

export interface GradientProps extends React.HTMLAttributes<HTMLImageElement> {}

export const LearningLanguage = React.forwardRef<HTMLImageElement, GradientProps>(
    () => {
        return (
            <React.Fragment>
                <img src={knowProgress} loading='lazy'/>
                <img src={compare} loading='lazy'/>
                <img src={planLesson} loading='lazy'/>
            </React.Fragment>
        );
    },
);

export default LearningLanguage;
