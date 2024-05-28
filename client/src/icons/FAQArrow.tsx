import { FC } from 'react';
import styled from 'styled-components';

interface FAQArrowProps {
    isAnswerVisible: boolean;
}

const FAQArrow: FC<FAQArrowProps> = ({ isAnswerVisible }) => {

    return (
        <ArrowWrapper $isAnswerVisible={isAnswerVisible} aria-expanded={isAnswerVisible ? true : false}>
            <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.5 1.5L6.5 6.5L11.5 1.5"
                    stroke="black"
                    strokeWidth="2"
                />
            </svg>
        </ArrowWrapper>
    );
};

const ArrowWrapper = styled.div<{ $isAnswerVisible: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 8px;
    transition: transform .12s ease-in-out; /* Apply transition for transform property */
    transform: ${({ $isAnswerVisible }) => $isAnswerVisible ? 'rotate(-180deg)' : 'rotate(0deg)'}; /* Rotate the SVG based on visibility */
`;

export default FAQArrow;
