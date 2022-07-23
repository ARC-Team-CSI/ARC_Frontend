import React from 'react';
import PropTypes from 'prop-types';

/*
     @Adam Dev.
     These Arrays below are pre-built text options to edit for accordions. Each individually marked with a comment on what year it resembles.
 */
const tipsComponentArray = [
    // Freshman Array
    [
    <p>FRESHMAN YEAR CAREER MILESTONES FOR COMPUTER SCIENCE MAJORS
        <p>A small percent percentage of students obtain summer internships following their first year. Students need to gain as much insight into their chosen field as possible. To prepare, first-year students should:</p>
        <ul>
            <li>
                <p>Get acclimated to CSI. Familiarize yourself with academic advising and your academic dept.the Computer Science department.</p>
            </li>
            <li>
                <p>Review the Computer Science Department Website and your major required courses.</p>
            </li>
            <li>
                <p>Create your Handshake account to stay informed about all of the services, events, and workshops.</p>
            </li>
            <li>
                <p>Get to know your professors.&nbsp;</p>
            </li>
            <li>
                <p>Get to know your classmates outside of class&mdash;they will be sharing a similar journey, and you will likely collaborate on projects and study groups in the next few years.</p>
            </li>
            <li>
                <p>Meet with a CSI career counselor to discuss your career goals.</p>
            </li>
            <li>
                <p>Attend CSI workshops, fairs, panels, and meet-ups.</p>
            </li>
            <li>
                <p>Think about how you would like your resume to look by the time you graduate. What types of skills and experiences do you want to obtain over the next four years?</p>
            </li>
            <li>
                <p>Identify your current skills and skills necessary for job functions and roles you see for yourself in the future. If there is a gap, consider what activities, involvement, courses, and competencies will help you acquire the necessary skills. Create a plan to develop and practice needed skills.</p>
            </li>
        </ul>
    </p>,
        <ul>
            <li>
                <p>Create a LinkedIn Account</p>
            </li>
            <li>
                <p>Create a Handshake Account with the Career Center</p>
            </li>
            <li>
                <p>Attend at Hackathon</p>
            </li>
            <li>
                <p>Create a Draft Resume</p>
            </li>
            <li>
                <p>Join a Student Tech club</p>
            </li>
            <li>
                <p>Create a GitHub Account</p>
            </li>
            <li>
                <p>Explore typical career options for Computer Science Majors</p>
            </li>
            <li>
                <p>Review major required Courses</p>
            </li>
        </ul>,
        <p>Develop your professional skills, explore possible careers, and build your network
            <p>Part-time jobs and volunteer opportunities should be a part of your summer experience. Though any job can be beneficial, professional, related experiences will help you test career options and build your resume.</p>
        </p>
],
    /** Sophmore Year **/
    [<p>SOPHOMORE YEAR CAREER MILESTONES FOR COMPUTER SCIENCE MAJORS
        <p>It is highly recommended that students seek an internship during the summer following their second year. Two summers of internships will well position students to enter the job market during their senior year competitively. To prepare, sophomores should:</p>
        <ul>
            <li>
                <p>Talk to professors, family, friends, alumni, and professionals about fields that may interest you.</p>
            </li>
            <li>
                <p>Get to know your classmates outside of class&mdash;they will be sharing a similar journey, and you will likely collaborate on projects and study groups in the next few years.</p>
            </li>
            <li>
                <p>interest you.</p>
            </li>
            <li>
                <p>Build your experience by getting involved with student organizations.</p>
            </li>
            <li>
                <p>List career choices related to your major and explore experiential education.</p>
            </li>
            <li>
                <p>Speak with people in potential career choice areas and engage in &quot;shadowing&quot; experiences.</p>
            </li>
            <li>
                <p>Develop career exploration skills. Attend Career Center seminars on resume writing, business etiquette, career exploration and interviewing skills, managing social media.&nbsp;</p>
            </li>
            <li>
                <p>Target companies of interest, conduct research, and apply to internship positions.</p>
            </li>
            <li>
                <p>Identify your current skills and skills necessary for job functions and roles you see for yourself in the future. If there is a gap, consider what activities, involvement, courses, competencies will help you acquire the necessary skills. Create a plan to develop and practice the needed skills.</p>
            </li>
        </ul>
    </p>,
        <ul>
            <li>
                <p>Develop a network of contacts through LinkedIn. Your network will be helpful when you begin your full-time career exploration&nbsp;</p>
            </li>
            <li>
                <p>Update your Resume</p>
            </li>
            <li>
                <p>Find at least one mentor you can check-in with periodically that can provide you support&nbsp;</p>
            </li>
            <li>
                <p>Post to &nbsp;your &nbsp;Github Account</p>
            </li>
            <li>
                <p>Contribute to open-source projects</p>
            </li>
            <li>
                <p>Launch a side project (web app or mobile)&nbsp;</p>
            </li>
            <li>
                <p>Attend local hackathons or coding events to collaborate on code and meet new&nbsp;</p>
            </li>
            <p>students/engineers</p>
            <ul>
                <li>
                    <p>Join student professional organizations in your chosen field. Become active. Attend career fairs, local meetings, conferences, and seminars whenever possible.</p>
                </li>
            </ul>
        </ul>,
        <p>Develop your professional skills, explore possible careers, and build your network.
            <p>Apply for as many technical internship positions as you possibly can. You need to be prepared to apply from August &ndash; October for the Junior Year summer iInternships (Summer) &nbsp;</p>
        </p>
    ],
    /** Junior Year **/
    [
        <p>JUNIOR YEAR CAREER MILESTONES FOR COMPUTER SCIENCE MAJORS
        <p>By junior year, students should be well prepared to either return to a previous summer internship or utilize every option available to obtain a new one.</p>
        <p>Continue the activities from the first and second years and assume more responsible positions in extra-curricular activities. Start to reflect (or continue reflecting) on what you&apos;re learning about yourself and your career options from the experiences you&apos;ve had.</p>
        <ul>
            <li>
                <p>Cultivate contacts both on and off-campus. Become familiar with specialized areas in your chosen field and potential employers.</p>
            </li>
            <li>
                <p>If you are drawn to research, investigate graduate schools.</p>
            </li>
            <li>
                <p>Conduct informational interviews with people in your chosen field. Use your list of contacts, professors, and those working in your chosen field.</p>
            </li>
            <li>
                <p>Continue to review and apply for internships.,</p>
            </li>
        </ul>
    </p>,
        <ul>
            <li>
                <p>Create an effective resume&nbsp;</p>
            </li>
            <li>
                <p>Utilize LinkedIn to build your professional network</p>
                <ul>
                    <li>
                        <p>Start marketing yourself and building relationships on LI. It takes time and effort to get your name around and become visible, also essential to line up great jobs. &amp; hiring managers will look at your LI profile before they decide to interview. A couple of tips:&nbsp;</p>
                        <ul>
                            <li>
                                <p>Create a Featured section on your LI profile where you link your Github, your portfolio website, and videos of your projects. Create a Featured entry for each Github project.&nbsp;</p>
                            </li>
                            <li>
                                <p>Turn your LI timeline into a diary of your professional work. Post frequently about what you are working on.&nbsp;</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <p>Acquire technical internship interview readiness (Practice, Practice, Practice)&nbsp;</p>
            </li>
            <li>
                <p>Acquire confidence developing in one industry tech stack beyond what&apos;s taught in cclasses</p>
            </li>
            <li>
                <p>Work in at least one software internship position by summer of Junior year</p>
            </li>
            <li>
                <p>Apply for Internships (CUNY TECH PREP, TTP Residency)</p>
            </li>
            <li>
                <p>Strengthen your professional network with more engineers and motivated peers</p>
            </li>
            <li>
                <p>Consider &nbsp;Self Guided Learning-Outside the Classroom</p>
            </li>
            <li>
                <p>Participate in a Virtual Work Experience Program&nbsp;</p>
            </li>
        </ul>,
        <p>Develop your professional skills, explore possible careers, and build your network.
            <p>Apply for as many technical internship positions as you possibly can. &nbsp;</p>
        </p>
    ],
    /** Senior Year **/
    [
        <p>SENIOR YEAR CAREER MILESTONES FOR COMPUTER SCIENCE MAJORS
        <p>Students who have actively sought and obtained internships and research opportunities are well-positioned to pursue consideration for a full-time position competitively. To reach this goal, seniors  </p>
        <ul>
            <li>
                <p>Develop your career identification strategy or apply to graduate schools. Expand networking efforts, especially off-campus.</p>
            </li>
        </ul>
    </p>,
        <ul>
            <li>
                <p>Take advantage of every event offered by Career &amp; Professional Development to perfect your job search, interviewing, and employability skills.</p>
            </li>
            <li>
                <p>Schedule an appointment with your career advisor to go over your final resume, portfolio, cover letter, etc.</p>
            </li>
            <li>
                <p>Alert contacts in your network to remind them you are in the process of searching for a job.</p>
            </li>
            <li>
                <p>Apply, apply and apply for more jobs, record your progress, and remember to follow up on your applications.</p>
            </li>
            <li>
                <p>Arrange for references. These can be professors, connections, internship positions, or others who know your interests, abilities, skills, and work habits.</p>
            </li>
            <li>
                <p>Complete your process for applying to graduate school.</p>
            </li>
            <li>
                <p>Take the Senior Exit Survey to report job offers to &nbsp; ??the department chairperson or other designated person.</p>
            </li>
        </ul>,
        <p>Congrats you have completed your CSI CUNY2x Checklist, keep applying to jobs!</p>
    ]


]

function TipsText(sub) {



    console.log(tipsComponentArray[sub.sub][sub.subindex])
    return (
        <div>
        <>
            {tipsComponentArray[sub.sub][sub.subindex]}
        </>
        </div>
    );
}

export default TipsText;

TipsText.propTypes = {
    sub: PropTypes.number,
};