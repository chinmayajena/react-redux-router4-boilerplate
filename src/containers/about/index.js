import React from 'react'
import { connect } from 'react-redux'

const About = props => (
  <div>
    <h1>About</h1>
    <p>Count: {props.count}</p>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
})


export default connect(
  mapStateToProps,
  null
)(About)