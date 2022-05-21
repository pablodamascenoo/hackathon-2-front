import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { QuestionsContainer } from "./style";
import axios from "axios";
import QuestionBox from "../../components/QuestionBox";

export default function QuestionsPage() {
    const { token, user } = useContext(AuthContext);
    const { id } = useParams();
    const [questions, SetQuestions] = useState([]);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    console.log(questions);

    useEffect(() => {
        const promisse = axios.get(
            `https://escola-online.herokuapp.com/question/${id}`,
            config
        );

        promisse.then((obj) => {
            const { data } = obj;
            SetQuestions([...data]);
        });
    }, []);

    return (
        <QuestionsContainer>
            {questions.map((question, index) => {
                return (
                    <QuestionBox
                        key={index}
                        title={`Questão ${index + 1}`}
                        enunciate={question.enunciate}
                        options={question.options}
                    />
                );
            })}
        </QuestionsContainer>
    );
}