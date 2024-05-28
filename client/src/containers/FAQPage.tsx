import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FAQArrow from '../icons/FAQArrow'

const FAQPage: React.FC = () => {
	const [answerVisibilities, setAnswerVisibilities] = useState([false, false, false]);

	const toggleAnswerVisibility = (index: number) => {
    setAnswerVisibilities(prev => {
      const updatedVisibilities = [...prev];
			for (let i = 0; i < updatedVisibilities.length; i++) {
				if (i !== index) {
					updatedVisibilities[i] = false;
				}
			}
      updatedVisibilities[index] = !updatedVisibilities[index];
      return updatedVisibilities;
    });
  };

	return (
		<section>
			<Title>FAQ</Title>
			<Content>
				<FAQItem>
					<FAQQuestion onClick={() => toggleAnswerVisibility(0)} $isVisible={answerVisibilities[0]}>
						How does Paprback work?
						<FAQArrow isAnswerVisible={answerVisibilities[0]}/>
					</FAQQuestion>
						<FAQAnswer $isVisible={answerVisibilities[0]}>
							<p>
								Paprback is a platform that allows you to
								discover new books, share your old books, and
								connect with other book lovers. You can search
								for books, create listings, and connect with
								other users to arrange swaps or donations.
							</p>
						</FAQAnswer>
				</FAQItem>
				<FAQItem>
					<FAQQuestion onClick={() => toggleAnswerVisibility(1)} $isVisible={answerVisibilities[1]}>
						How do I list my books?
						<FAQArrow isAnswerVisible={answerVisibilities[1]}/>
					</FAQQuestion>
						<FAQAnswer $isVisible={answerVisibilities[1]}>
							<p>
								To list your books on Paprback, simply create an
								account, search for your book by ISBN or title,
								and fill in the details. You can then add your
								book to your listings and connect with other
								users to arrange swaps or donations.
							</p>
						</FAQAnswer>
				</FAQItem>
				<FAQItem>
					<FAQQuestion onClick={() => toggleAnswerVisibility(2)} $isVisible={answerVisibilities[2]}>
						How do I connect with other users?
						<FAQArrow isAnswerVisible={answerVisibilities[2]}/>
					</FAQQuestion>
						<FAQAnswer $isVisible={answerVisibilities[2]}>
							<p>
								To connect with other users on Paprback, simply
								search for books, browse listings, and send a
								message to arrange a swap or donation. You can
								also join our community forums to chat with
								other book lovers and get recommendations.
							</p>
						</FAQAnswer>
				</FAQItem>
			</Content>
			<StyledLink to="/dashboard">Dashboard</StyledLink>
		</section>
	)
}

export default FAQPage

const Title = styled.h1`
	font-size: ${({ theme }) => theme.fontSizes.xxxxl};
	margin-bottom: 5rem;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 4rem;
	margin: 0 auto;
	width: 100%;
	@media only screen and (max-width: 1199px) {
		max-width: 60rem;
	}

	@media only screen and (max-width: 767px) {
		max-width: 45rem;
	}

	@media only screen and (max-width: 546px) {
		max-width: 30rem;
	}
`

const FAQItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	max-width: 80rem;
	overflow: hidden;
	border-bottom: 2px solid ${({ theme }) => theme.colors.greenAlpha};
	transition: all .3s;
	cursor: pointer;
`

const FAQQuestion = styled.button<{ $isVisible: boolean }>`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: none;
	border: none;
	outline: none;
	text-align: left;
	padding: 0;
	font-size: clamp(${({ theme }) => theme.fontSizes.m}, 3vw, ${({ theme }) => theme.fontSizes.l});
	color: ${({ $isVisible }) => ($isVisible ? '#DE9E36' : '#333')};
	overflow: hidden;
	position: relative;
`

const FAQAnswer = styled.div<{ $isVisible: boolean }>`
  max-height: ${({ $isVisible }) => ($isVisible ? '20rem' : '0')}; 
	opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')}; 
	overflow: hidden;
  padding-top: ${({ $isVisible }) => ($isVisible ? '2rem' : '0')};
	padding-bottom: 1rem;
	line-height: 1.6;
  font-size: clamp(${({ theme }) => theme.fontSizes.s}, 2vw, ${({ theme }) => theme.fontSizes.m});
  color: ${({ theme }) => theme.colors.darkerGray};
  text-align: justify;
  transition: all .3s;
`;

const StyledLink = styled(Link)`
	display: block;
	margin-top: 2rem;
	color: #007bff;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`