import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Page } from '@/components'
import styles from './test.module.css'
import { UserContext } from '@/contexts'
import QualityTest from './qualityTest'

export default function Test(){
    const [isQualityTest, setIsQualityTest] = useState(false)
    const { user }= useContext(UserContext)
    const [count, setCount] = useState(0)
    const [degrees, setDegrees] = useState(null)
    const [test, setTest] = useState(null)
    const [selectedValues, setselectedValues] = useState({})
    const [passed, setPassed] = useState(false);
    const [score, setScore] = useState(null);
    let filteredData = []
    const router = useRouter()
    let id = parseInt(router.query.id[0])
    const getDegrees=async()=>{
        try {
            const response = await axios.get(
                `${process.env.BASE_URL_API}api/payments/all-payments`
            )
            if(response.data){
                setDegrees(response.data)
            }
        } catch (error) {
            
        }
    }
    const getTest=async()=>{
        const response = await axios.get(
            `${process.env.BASE_URL_API}api/courses/get-test-course/${id}`,
        )
        if(response.data){
            setTest(response.data)
        }
    }
    
    const handleAnswer = (questionIndex, selectedAnswerIndex) => {
        const updatedUserAnswers = [...selectedValues];
        updatedUserAnswers[questionIndex] = selectedAnswerIndex;
        setselectedValues(updatedUserAnswers);
    };
    
    const handleTest = async({grade})=>{
        try {
            const response = await axios.put(
                `${process.env.BASE_URL_API}api/payments/edit-grade/${user.student_id}`,
                {
                    payment_grade: grade
                }          
            )
            if(response.status === 200){
                setCount(count + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        let calculatedScore = 0;
        filteredData.forEach((question, index) => {
        const correctAnswerIndex = question.options.findIndex(answer => answer.option_value === 1)
        if(selectedValues[index] === correctAnswerIndex) {
            calculatedScore += 1;
          }
        });
        setScore(calculatedScore)
        handleTest({
            grade: calculatedScore
        })
        setPassed(calculatedScore > 2)
    };
    useEffect(()=>{
        getTest()
        getDegrees()
    },[])
    useEffect(()=>{
        setselectedValues([filteredData.length].fill(-1))
    },[test])
    let values = []
    let suma
    if(test){
        test.forEach((item, i) => {
            const question_id = item.question_id;
          
            // Buscamos una relación existente con el mismo identificador
            const relacionExistente = filteredData.find(relacion => relacion.question_id === question_id);
          
            if (relacionExistente) {
              relacionExistente.options.push(...[{
                    option_name : item.option_name,
                    option_value: item.option_value
                }]);
            } else {
              // Si no existe, creamos una nueva relación
              filteredData.push({
                question_name: item.question_name,
                question_id: item.question_id,
                options:[{
                    option_name : item.option_name,
                    option_name_input:i,
                    option_value: item.option_value
                }],
              });
            }
          });
          /*if(filteredData){
            for (const objeto of filteredData) {
                for (const elementoAnidado of objeto.options) {
                values.push(elementoAnidado.option_value)
                }
              }
            suma = values.reduce((prev,next)=> prev + next, 0)
          }*/
    }
    let filteredDegrees
    if(degrees && user){
        filteredDegrees = degrees.filter((degree)=> degree.course_id === id && degree.student_id === user.student_id)
        .map(degree=>degree)
    }
    const handleQualityTest = async(evt)=>{
        evt.preventDefault()
        setIsQualityTest(true)
    }
    return (
        <>
            {
            !isQualityTest && test?
            <QualityTest
                title={`${!test ? 'Cuestionario de calidad' : test[0].course_name}`}
                onSubmit={handleQualityTest}
            />
            :
            <Page title={`${!test ? 'Cuestionario' : test[0].course_name}`}>
                <br/>
                <br/>
                <center>
                    <h4>
                        Evaluación de conocimientos
                    </h4>
                </center>
            <form className={styles.formTest} onSubmit={handleSubmit}>
                {
                    !filteredData ? null
                    :
                    filteredData.map((question, i)=>(
                        <div key={question.question_id}>
                            <label className={styles.questionName}>
                                {question.question_name}
                            </label>
                            <div className={styles.questionOptions}>
                                {
                                    question.options.map((option, index)=>(
                                        <div key={index}>
                                            <input
                                            type='radio'
                                            value={option.option_value}
                                            name={`option_${i}`}
                                            onChange={() => handleAnswer(i, index)}/> <label>{option.option_name}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                {
                    count === 2 ?
                    <span>No tiene más intentos</span>
                    :
                    <button>Mandar respuestas</button>
                }
                <span>{score !== null && <p>Tu puntuación: {score} de {filteredData.length}</p>}</span>
                {
                score && score >= 2 ?
                <>
                    <p>
                        Felicidades,
                        ha aprobado el examen, pronto recibirá su constancia
                        de acreditación y de asistencia a su correo.
                    </p>
                    {
                        /*filteredDegrees.map((degree,i)=>(
                            <a
                            href={degree.payment_degree}
                            key={i}
                            target='_blank'
                            >
                                Descargar constancia
                            </a>
                        ))*/
                    }
                </>
                : 
                null
                }
                {
                    score <2 && count === 2?
                    <p>
                    No ha acreditado el exámen de conocimientos, pronto podrá descargar
                    su constancia de asistencia
                    </p>
                    :
                    null
                }
            </form>
            </Page>
        }
        </>
    )
}

export const getStaticPaths = async()=>{
    const response = await fetch(`${process.env.BASE_URL_API}api/courses/all-courses`)
    const json = await response.json()
    const paths = json.filter((course)=>course.course_url)
    .map((course)=>{
        return{
            params:{
                 id: [
                    `${course.course_id}`,                 
                ],
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps=async({params})=>{
    const videoId = params.id ?? ''
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    }
    const response = await fetch(
        `https://api.vimeo.com/me/folders/${videoId[1]}/videos`,
        config
    )
    const data = await response.json()
    return {
        props:{
            data: data,
            title: videoId[0] || null,
            liveVideoId: videoId[2] ? videoId[2] : null
        }
    }
}