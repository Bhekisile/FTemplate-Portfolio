import "../styles/RecentProjects.scss";
import projectsData from "../assets/projectsData";
import { motion } from 'framer-motion';

const Projects1 = () => {

	return (
		<div className="project-card1">
			<motion.div	
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.7 }}
				className="project-card1__first-row"
			>
				<div className="project-card1__first-row--first-col">
					<a
						href="https://booking-reminder.com"
						className="project-card1__external-link1"
						target="_blank"
						rel="noreferrer"
					>
						<img src="https://res.cloudinary.com/dgimm1mwi/image/upload/v1757407593/Bookings_r79per.jpg" alt="Bookings" className="project-card1__first-row--image" />
					</a>
					<a
						href="https://booking-reminder.com"
						className="project-card1__external-link1"
						target="_blank"
						rel="noreferrer"
					>
						<img src="https://res.cloudinary.com/dgimm1mwi/image/upload/v1757407594/Settings_t0lejj.jpg" alt="Settings" className="project-card1__first-row--image project-card1__first-row--image--right" />
					</a>
				</div>
				<div className="project-card1__first-row--second-col">
					<h2>
						Booking Reminder App
					</h2>
					<div className="project-card1__first-row--description">
						The application is for small businesses not more than four employees to manage their bookings and to remind their customers of their bookings by sending them an sms. The application is built with React Native (Expo), Ruby on Rails and PostgreSQL. It uses SMSPortal for sending sms to customers, AWS S3 bucket for storing images, Postmark for sending emails, and Payfast as payment gateway.
					</div>
					<div className="project-card1__first-row--links">
						<a
							href="https://booking-reminder.com"
							className="project-card1__first-row--link"
							target="_blank"
							rel="noreferrer"
						>
							View live
						</a>
						<a
							href="https://github.com/Bhekisile/booking-reminder-frontend"
							className="project-card1__first-row--link"
							target="_blank"
							rel="noreferrer"
						>
							View source
						</a>
					</div>
				</div>
			</motion.div>
			{projectsData.map((project, index) => (
				<div key={index} className="card-content1">
					<motion.div
						initial={{ opacity: 0, rotateX: "90deg" }}
						whileInView={{ opacity: 1, rotateX: 0 }}
						transition={{ duration: 0.6, delay: index * 0.15 }}
						className="card-content1__single-card1"
					>
						<div className="card-content1__single-card1--left">
							<a
								href={project.projectUrl}
								className="card-content1__external-link1"
								target="_blank"
								rel="noreferrer"
							>
								<img src={project.imageUrl} alt={project.projectName} className="card-content1__image1" />
							</a>
						</div>
						<div className="card-content1__single-card1--right">
							<h2 className="">
								{project.projectName}
							</h2>
							<div className="card-content1__description">
								{project.projectDescription}
							</div>
							<div className="card-content1__links">
								<a
									href={project.projectUrl}
									className="card-content1__link"
									target="_blank"
									rel="noreferrer"
								>
									View live
								</a>
								<a
									href={project.linkSource}
									className="card-content1__link"
									target="_blank"
									rel="noreferrer"
								>
									View source
								</a>
							</div>
						</div>
					</motion.div>
				</div>
			))}

		</div>
	)
}

export default Projects1;