import courseService from "../services/course-service";

export const FIND_COURSE_BY_ID = "FIND_COURSE_BY_ID"

export const findCourseById = (dispatch, courseId) => {
    courseService.findCourseById(courseId)
        .then((theCourse) => dispatch({
                                          type: "FIND_COURSE_BY_ID",
                                          course: theCourse
                                      }))
}

const courseActions = {
    findCourseById
}

export default courseActions