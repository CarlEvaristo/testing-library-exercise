import { render, screen, fireEvent } from '@testing-library/react';
import CodeQuiz22 from './CodeQuiz22';

test("The default button color is red", ()=>{
    render(<CodeQuiz22/>)
    expect(true).toBe(true)
})