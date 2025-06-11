import { FaDownload } from 'react-icons/fa';
import gansPdf from '../assets/GANs_Research_Paper.pdf';
import umlPdf from '../assets/CSI_5354_Course_Project_Final_Report.pdf';
import gansImg from '../assets/GANs-thumbnail.PNG';
import umlImg from '../assets/UML-thumbnail.PNG';
export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'GAN-Based Seismic Data Augmentation (Work in Progress)',
      abstract:
        'This case study explores the use of Generative Adversarial Networks (GANs) to augment seismic datasets for improving the performance of arrival-time prediction models like PhaseNet. The approach addresses the challenge of limited real-world seismic data by generating synthetic waveforms that mimic realistic earthquake signals. Preliminary results show improved F1-score and generalization in the neural network’s ability to detect seismic wave arrivals. This research highlights the potential of GANs in enhancing machine learning pipelines for geophysical applications.',
      file: gansPdf,
      filename: 'GANs_Research_Paper.pdf',
       image: gansImg,
    },
    {
      title: 'UML-Based Model Verification for Smart Home Systems',
      abstract:
        'This project applies SysML and MARTE within Papyrus to model and verify real-time behavior in an automated smart home system. Key components like HVAC, Lighting, and Security subsystems were modeled with OCL-based constraints and MARTE stereotypes to validate functional correctness and timing behavior. The research demonstrates how formal modeling tools can enforce system logic, catch design flaws early, and enhance traceability. The work also highlights technical challenges in integrating MARTE within student-level modeling projects.',
      file: umlPdf,
      filename: 'CSI_5354_Course_Project_Final_Report.pdf',
      image: umlImg,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-20">
      <h2 className="text-5xl font-bold text-center mb-16">Case Studies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {caseStudies.map((cs, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="mb-4">
              <a href={cs.file} download={cs.filename}>
                <img
                    src={cs.image}
                    alt={cs.title}
                    className="rounded-lg w-full h-48 object-cover hover:opacity-80 transition"
                />
                <div className="mt-2 text-sm text-teal-400 flex items-center justify-start gap-2">
                <FaDownload />
                Download PDF
                </div>
              </a>
            </div>
            <h3 className="text-2xl font-bold mb-3">{cs.title}</h3>
            <p className="text-lg text-gray-300 leading-relaxed">{cs.abstract}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
