import React from 'react';

const Certifications = () => {
    return (
        <div>
            <h2 className="text-cyan-700 text-2xl font-bold underline">Certifications</h2>
            <div className="pt-5 flex flex-col space-y-5 flex-wrap">
                <div className="flex flex-row justify-around space-x-2">
                    <img className="w-1/4 h-auto" src="aws-cloud-practioner.png" alt="AWS Cloud Practitioner" />
                    <img className="w-1/4 h-auto" src="aws-developer-associate.png" alt="AWS Developer Associate" />
                    <img className="w-1/4 h-auto" src="aws-solutions-architect-associate.png" alt="AWS Solutions Architect Associate" />
                    <img className="w-1/4 h-auto" src="aws-cloud-ops-engineer-associate.png" alt="AWS Cloud Ops Engineer Associate" />
                </div>
                <div className="flex flex-row justify-around space-x-2">
                    <img className="w-1/4 h-auto" src="aws-devops-engineer-professional.png" alt="AWS DevOps Engineer Professional" />
                    <img className="w-1/4 h-auto" src="aws-solutions-architect-professional.png" alt="AWS Solutions Architect Professional" />
                    <img className="w-1/4 h-auto" src="k8s-ckad.png" alt="Certified Kubernetes Application Developer" />
                    <img className="w-1/4 h-auto" src="k8s-cka.png" alt="Certified Kubernetes Administrator" />
                </div>
                <div className="flex flex-row justify-around space-x-2">
                    <img className="w-1/4 h-auto" src="linux-lcfa.png" alt="Linux Certified Foundation Associate" />
                    <img className="w-1/4 h-auto" src="gcp-cloud-engineer-associate.png" alt="GCP Cloud Engineer Associate" />
                    <img className="w-1/4 h-auto" src="gcp-cloud-architect-professional.png" alt="GCP Cloud Architect Professional" />
                    <img className="w-1/4 h-auto" src="gcp-cloud-devops-engineer-professional.png" alt="GCP Cloud Devops Engineer Professional" />
                </div>
                <div className="flex flex-row space-x-2">
                    <img className="w-1/4 h-auto" src="terraform-associate.png" alt="TerraForm Associate" />
                    <img className="w-1/4 h-auto" src="github-actions.png" alt="TerraForm Associate" />
                </div>
            </div>
        </div>
    );
};

export default Certifications;