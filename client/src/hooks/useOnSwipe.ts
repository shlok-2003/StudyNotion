// import { useEffect } from 'react';

// interface SwipeEvent extends TouchEvent {
//     initialX: number;
// }

// type SwipeCallback = () => void;

// const useOnSwipeRight = (callback: SwipeCallback) => {
//     useEffect(() => {
//         const handleSwipeRight = (event: SwipeEvent) => {
            // Adjust the sensitivity as needed
//             const sensitivity = 50;

//             if (event.touches[0].clientX > event.initialX + sensitivity) {
//                 callback();
//             }
//         };

//         const handleTouchStart = (event: TouchEvent) => {
//             const touchEvent = event as SwipeEvent;
//             touchEvent.initialX = touchEvent.touches[0].clientX;
//         };

//         window.addEventListener('touchstart', handleTouchStart);
//         window.addEventListener(
//             'touchmove',
//             handleSwipeRight as EventListener,
//         );

//         return () => {
//             window.removeEventListener('touchstart', handleTouchStart);
//             window.removeEventListener(
//                 'touchmove',
//                 handleSwipeRight as EventListener,
//             );
//         };
//     }, [callback]);
// };

// export default useOnSwipeRight;

// import { TouchEvent, useState } from 'react';

// interface SwipeInput {
//     onSwipedLeft?: () => void;
//     onSwipedRight?: () => void;
// }

// interface SwipeOutput {
//     onTouchStart: (e: TouchEvent) => void;
//     onTouchMove: (e: TouchEvent) => void;
//     onTouchEnd: () => void;
// }

// export const useOnSwipe = (input: SwipeInput): SwipeOutput => {
//     const [touchStart, setTouchStart] = useState(0);
//     const [touchEnd, setTouchEnd] = useState(0);

//     const minSwipeDistance = 50;

//     const onTouchStart = (e: TouchEvent) => {
//         setTouchEnd(0);
//         setTouchStart(e.targetTouches[0].clientX);
//     };

//     const onTouchMove = (e: TouchEvent) =>
//         setTouchEnd(e.targetTouches[0].clientX);

//     const onTouchEnd = () => {
//         if (!touchStart || !touchEnd) return;
//         const distance = touchStart - touchEnd;
//         const isLeftSwipe = distance > minSwipeDistance;
//         const isRightSwipe = distance < -minSwipeDistance;
//         if (isLeftSwipe && input?.onSwipedLeft) {
//             input.onSwipedLeft();
//         }
//         if (isRightSwipe && input?.onSwipedRight) {
//             input.onSwipedRight();
//         }
//     };

//     return {
//         onTouchStart,
//         onTouchMove,
//         onTouchEnd,
//     };
// };

// export default useOnSwipe;
