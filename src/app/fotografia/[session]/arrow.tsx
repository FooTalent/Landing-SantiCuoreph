import React from 'react'

const ArrowNav = (props: {size: number, left: boolean}) => {
  return (
    <svg className={`w-[20px] sm:w-[25px] ${props.left ? 'rotate-180' : ""}`} width={props.size} height={props.size} viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5415 13.7882L19.791 11.5386L26.5413 18.2888L19.791 25.0391L17.5415 22.7879L20.4497 19.8797L8.45898 19.8797L8.45898 16.6979L20.4497 16.6979L17.5415 13.7882Z" fill="#FCCD35"/>
<path fillRule="evenodd" clipRule="evenodd" d="M29.8741 5.91302C36.7086 12.7476 36.7086 23.8267 29.8741 30.6612C23.0395 37.4957 11.9605 37.4957 5.12591 30.6612C-1.70864 23.8267 -1.70864 12.7476 5.12591 5.91302C11.9605 -0.921528 23.0395 -0.921528 29.8741 5.91302ZM27.6245 8.16256C28.9541 9.49214 30.0088 11.0706 30.7284 12.8077C31.4479 14.5449 31.8183 16.4068 31.8183 18.2871C31.8183 20.1674 31.4479 22.0293 30.7284 23.7665C30.0088 25.5036 28.9541 27.0821 27.6245 28.4117C26.295 29.7412 24.7165 30.7959 22.9794 31.5155C21.2422 32.235 19.3803 32.6054 17.5 32.6054C15.6197 32.6054 13.7578 32.235 12.0206 31.5155C10.2835 30.7959 8.70503 29.7412 7.37545 28.4117C4.69026 25.7265 3.18173 22.0845 3.18173 18.2871C3.18173 14.4897 4.69026 10.8478 7.37546 8.16256C10.0607 5.47737 13.7026 3.96884 17.5 3.96884C21.2974 3.96884 24.9394 5.47737 27.6245 8.16256Z" fill="#FCCD35"/>
</svg>

  )
}

export default ArrowNav