import { useState, useCallback } from 'react'
// custom hook to toggle true and false used to tell the handleRoll function if the toggled Die get's rolled again or if it's value is kept
export default function useToggle (initialState) {
    const [isToggled, setIsToggled] = useState(initialState);
      
        
    const toggle = useCallback(
        () => setIsToggled(state => !state),
        [setIsToggled],
    );
      
    return [isToggled, toggle];
}