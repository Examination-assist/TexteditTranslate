import React, { Component } from 'react'

import axios from 'axios'
const ENDPOINT = require('./config')

class Assign extends Component {
	state = { discipline: [], course: [] }
	async componentDidMount() {
		const discipline = await axios.post(ENDPOINT + 'courses?get=discipline')
		console.log(discipline)
		this.setState({ discipline: discipline.data })
	}

	async execute(e) {
		const disp = e.target.value
		const course = await axios.post(
			ENDPOINT + 'courses?get=course_name&discipline=' + disp
		)
		this.setState({ course: course.data })
	}
	render() {
		return (
			<React.Fragment>
				<div className='cardReport card'>
					<h2> Reporting</h2>
					<div class='dropdown'>
						<select
							class='dropbtn'
							name='Discipline'
							id='Discipline'
							onClick={(e) => this.execute(e)}
						>
							{this.state.discipline.map((elem) => (
								<option value={elem.discipline}>
									{elem.discipline}
								</option>
							))}
						</select>
					</div>
					<div class='dropdown'>
						<select
							class='dropbtn'
							name='CourseName'
							id='CourseName'
						>
							{this.state.course.map((elem) => (
								<option value={elem.course_name}>
									{elem.course_name}
								</option>
							))}
						</select>
					</div>
					<div class='dropdown'>
						<select n class='dropbtn' name='Language' id='Language'>
							<option value='Language 3'>Hindi</option>
							<option value='Language 4'>Bengali</option>
							<option>Marathi</option>
							<option value='Language 2'>Telugu</option>
							<option value='Language 1'>Tamil</option>
							<option value='Language 4'>Gujarati</option>
							<option>Kannada</option>
							<option>Malayalam</option>
						</select>
					</div>
					<br />
					<br />
					<button className='button1 '>
						<span
							className='buttonText'
							style={{ padding: ' 0 10px' }}
						>
							Submit
						</span>
					</button>
					<br />{' '}
					<div className='Reporting'>
						<h3>Details</h3>
						<table className='tableAssign'>
							<tr>
								<th>Discipline Name</th>
								<th>Course Name</th>
								<th>Language</th>
								<th>Total Lectures</th>
								<th>Finished Lectures</th>
								<th>Percentage </th>
								<th>Translators</th>
								<th>Approvers</th>
								<th>Status</th>
								<th>Comments</th>
								<th>Delete</th>
							</tr>

							<tr>
								<td>BASIC SCIENCE</td>

								<td>QUANTUM MECHANICS I</td>
								<td>Bengali</td>
								<td>20</td>
								<td>14</td>
								<td>70%</td>
								<td>Translator 1</td>
								<td>Approver 1</td>
								<td>Under Review</td>
								<td>Working</td>
								<td>
									<button className='button Reject ButtonReview'>
										<span className='buttonText'>
											Delete
										</span>
									</button>
								</td>
							</tr>
							<tr>
								<td>CIVIL ENGINEERING</td>
								<td>ENGINEERING GRAPHICS</td>
								<td>Tamil</td>
								<td>16</td>
								<td>8</td>
								<td>50%</td>
								<td>Translator 2</td>
								<td>Approver 3</td>
								<td>In Progress</td>
								<td>Working</td>
								<td>
									<button className='button Reject ButtonReview'>
										<span className='buttonText'>
											Delete
										</span>
									</button>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
export default Assign
