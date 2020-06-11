import React from 'react'
import { FiStar } from 'react-icons/fi'

import { connect } from 'react-redux'
import { HeadlinesActions } from '../../redux/reducers/headlines'

const Rating = ({
    defaulRate = [true, false, false, false, false],
    setReview,
    i,
    dataTest
}) => {

    const rateRoutine = index => ev => {
        const updatedStatus = defaulRate.map((status, i) => i <= index)
        setReview(i, updatedStatus)
    }

    return (
        <div className='rating-container' data-test = {dataTest}>
            {
                defaulRate.map((status, i) => (
                    <FiStar key={`start-${i}`} className={`icon ${status ? 'active' : ''}`} onClick={rateRoutine(i)} />
                ))
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setReview: (index, data) => dispatch(HeadlinesActions.setReview(index, data))
})
export default connect(null, mapDispatchToProps)(Rating)