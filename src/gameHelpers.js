export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// function to create stage
export const createStage = () =>
    // mutidemensional array 
    Array.from(Array(STAGE_HEIGHT), () =>

        new Array(STAGE_WIDTH).fill([0, 'clear']))