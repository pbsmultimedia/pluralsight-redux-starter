import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);

  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course});
  }
  
  onClickSave() {
    // dispatch action
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input
          type="submit"
          value="value"
          onClick={this.onClickSave}
        />
      </div>
    );
  }

}

//
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses // access the store
  }
}

/*
function mapDispatchToProps() {

}
*/

// exprt component "decorated" by the redux connect function
//export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // two function calls
export default connect(mapStateToProps)(CoursesPage); // two function calls
