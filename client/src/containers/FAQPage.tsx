import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FAQArrow from '../icons/FAQArrow'

const FAQPage: React.FC = () => {
	const [answerVisibilities, setAnswerVisibilities] = useState([false, false, false]);

	const toggleAnswerVisibility = (index: number) => {
    setAnswerVisibilities(prev => {
      const updatedVisibilities = [...prev];
      updatedVisibilities[index] = !updatedVisibilities[index];
      return updatedVisibilities;
    });
  };

	return (
		<section>
			<Title>FAQ</Title>
			<Content>
				<FAQItem>
					<FAQQuestion onClick={() => toggleAnswerVisibility(0)}>
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
					<FAQQuestion onClick={() => toggleAnswerVisibility(1)}>
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
					<FAQQuestion onClick={() => toggleAnswerVisibility(2)}>
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
	justify-content: center;
	align-items: center;
	gap: 2rem;
	max-width: 120rem;
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
	width: 100%;
	max-width: 80rem;
	overflow: hidden;
`

const FAQQuestion = styled.button`
	background: none;
	border: none;
	outline: none;
	width: 100%;
	text-align: left;
	padding: 10px;
	font-size: 18px;
	cursor: pointer;
	border-bottom: 1px solid #ccc;
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	z-index: 1;
`

const FAQAnswer = styled.div<{ $isVisible: boolean }>`
  height: ${({ $isVisible }) => ($isVisible ? '10rem' : '0')}; 
	opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')}; 
  overflow: hidden; 
  padding: 1rem;
  font-size: 1.6rem;
  color: #777;
  text-align: justify;
	z-index: 0;
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