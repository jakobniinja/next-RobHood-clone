import React from 'react'

const styles ={
notice : 'flex border border-[#30363b] mx-11 my-4 p-5 flex-col flex-1 ',
noticeContainer:'flex-1 ',
noticeTitle: 'text-gra-500',
noticeMessage:'text-white font-bold',
noticeCTA:'font-bold text-green-500 cursor-pointer mt-5'



}
function Notice() {
  return (
    <div className={styles.notice} >


    <div className={styles.noticeTitle}>
        Fund Your Account
    </div>
    <div className={styles.noticeMessage}>
        Your Bank accoutn is ready!  Fund your RobinHood account  to begin trading.
    </div>
    <div className={styles.noticeCTA}>Add funds </div>
    </div>
  )
}

export default Notice
