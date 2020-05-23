import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class UserDashboard extends Component {
	UPLOAD_ENDPOINT = 'http://localhost:8000/api/'
	constructor() {
		super()
		this.state = { data: [] }
	}
	async componentDidMount() {
		const result = await axios.post(
			this.UPLOAD_ENDPOINT + 'show_documents',
			{},
			{ headers: { user_id: localStorage.getItem('user_id') } }
		)
		for (let index = 0; index < result.data.docs.length; index++) {
			const element = result.data.docs[index]
			let date = new Date(element.created_at)
			result.data.docs[index].created_at = `${date.getDate()}/${
				date.getMonth() + 1
			}/${date.getFullYear()} ${date.getHours()+1}:${date.getMinutes()+1}`
		}
		for (let index = 0; index < result.data.docs.length; index++) {
			const element = result.data.docs[index]
			let date = new Date(element.updated_at)
			result.data.docs[index].updated_at = `${date.getDate()}/${
				date.getMonth() + 1
			}/${date.getFullYear()} ${date.getHours()+1}:${date.getMinutes()+1}`
		}
		this.setState({ data: result.data.docs })
	}
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<p style={{ padding: '0 10px' }}>
					<h1>User Dashboard</h1>
					<Link to='/document'>
						<button className='button'>
							<div className='buttonText'>
								Create new Document
							</div>
						</button>
					</Link>
				</p>
				<h2>My Work</h2>
				<div className='outerDash' style={{ overflowX: 'auto' }}>
					<table className='tableDash'>
						<tr>
							<th>Document ID</th>
							<th>Course Discipline</th>
							<th>Course Name</th>
							<th>Lecture Number</th>
							<th>Language</th>
							<th>Created at</th>
							<th>Updated at</th>
							<th>Status </th>
							<th>Visit </th>

							<th>
								Visit Complete
								<br /> transcript{' '}
							</th>
						</tr>

						{this.state.data.map((elem) => {
							return (
								<React.Fragment key={elem.doc_id}>
									<tr>
										<td>
											<span style={{ padding: '0 10px' }}>
												{elem.doc_id}
											</span>
										</td>
										<td>
											<span style={{ padding: '0 10px' }}>
												{elem.name}
											</span>
										</td>
										<td>
											<span style={{ padding: '0 10px' }}>
												{elem.book_name}
											</span>
										</td>
										<td>
											<span style={{ padding: '0 10px' }}>
												{elem.chapter_number}
											</span>
										</td>
										<td>
											<span style={{ padding: '0 10px' }}>
												{elem.to_}
											</span>
										</td>
										<td>
											<span style={{ padding: '0 10px' }}>
												{elem.created_at}
											</span>
										</td>
										<td>
											<span style={{ padding: '0 10px' }}>
												{elem.updated_at}
											</span>
										</td>

										<td>
											<span style={{ padding: '0 10px' }}>
												{elem.status}
											</span>
										</td>
										<td>
											<span style={{ padding: '0 10px' }}>
												<Link
													to={`/translate?doc_id=${elem.doc_id}`}
												>
													Visit
												</Link>
											</span>
										</td>
										<td>
											<span style={{ padding: '0 10px' }}>
												<Link
													to={`/review?doc_id=${elem.doc_id}`}
												>
													Complete Review
												</Link>
											</span>
										</td>
									</tr>
								</React.Fragment>
							)
						})}
					</table>
				</div>
				<br />
				<p style={{ padding: '0 10px' }}>
					<Link to='/login'>
						<button className='button'>
							<div className='buttonText'>
								Logout from dashboard
							</div>
						</button>
					</Link>
				</p>
			</div>
		)
	}
}
