import React, {useState} from 'react';
import {Badge, Button, Card, Collapse} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

export default function Job({job}) {
	const [open, setOpen] = useState(false);

	return (
		<Card className="mb-3">
			<Card.Body>
				<div className="d-flex justify-content-between">
					<div>
						<Card.Title>
							{job.title} - <span className="text-muted font-weight-light">{job.company}</span>
						</Card.Title>
						<Card.Subtitle className="text-muted mb-2">
							{new Date(job.created_at).toLocaleDateString()}
						</Card.Subtitle>
						<Badge variant={"secondary"} className="mr-2">{job.type}</Badge>
						<Badge variant={"primary"}>{job.location}</Badge>
						<div style={{wordBreak: 'break-all'}}>
							<ReactMarkdown source={job.how_to_apply}/>
						</div>
					</div>
					<img src={job.company_logo} alt={job.company} className="d-sm-none d-md-block" height="32"/>
				</div>
				<Card.Text>
					<Button variant={"primary"}
									className="text-capitalize"
									onClick={() => setOpen(prevOpen => !prevOpen)}>
						{open ? 'hide details' : 'view details'}
					</Button>
				</Card.Text>
				<Collapse in={open}>
					<div className="mt-4">
						<ReactMarkdown source={job.description} className="text-justify"/>
					</div>
				</Collapse>
			</Card.Body>
		</Card>
	);
}
