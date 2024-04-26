export const BASE_THUMBNAIL_APPS_PATH = "https://s3.amazonaws.com/vhs-patientnexus/thumbnail/apps/";

export const assets = {
    apps: {
        card: {
            title: "Cardiology",
            modules: [
                { key: "aortic", title: "Aortic Valve Replacement", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}aortic.jpg` },
                { key: "cabg", title: "CABG", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}cabg.jpg` },
                { key: "pci", title: "Cardiology", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}pci.jpg` },
                { key: "cad", title: "Coronary Artery Disease", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}cad.jpg` },
                { key: "hf", title: "Heart Failure", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}hf.jpg` },
                { key: "mitral", title: "Mitral Valve Replacement", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}mitral.jpg` },
            ],
        },
        derm: {
            title: "Dermatology",
            modules: [{ key: "derm", title: "Dermatology", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}derm.jpg` }],
        },
        em: {
            title: "Emergency Medicine",
            modules: [{ key: "em", title: "Emergency Medicine", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}em.jpg` }],
        },
        endo: {
            title: "Endocrinology",
            modules: [{ key: "endo", title: "Endocrinology", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}endo.jpg` }],
        },
        ent: {
            title: "Ear, Nose and Throat",
            modules: [{ key: "ent", title: "ENT", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}ent.jpg` }],
        },
        gast: {
            title: "Gastroenterology",
            modules: [{ key: "gi", title: "Gastroenterology", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}gi.jpg` }],
        },
        gs: {
            title: "General Surgery",
            modules: [{ key: "gs", title: "General Surgery", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}gs.jpg` }],
        },
        id: {
            title: "Infectious Diseases",
            modules: [{ key: "id", title: "Infectious Diseases", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}id.jpg` }],
        },
        neur: {
            title: "Neurology/Neurosurgery",
            modules: [{ key: "neuro", title: "Neurology/Neurosurgery", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}neuro.jpg` }],
        },
        ob: {
            title: "OB/GYN",
            modules: [{ key: "obgyn", title: "OB/GYN", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}obgyn.jpg` }],
        },
        onc: {
            title: "Oncology",
            modules: [{ key: "onc", title: "Oncology", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}onc.jpg` }],
        },
        oph: {
            title: "Ophthalmology",
            modules: [{ key: "oph", title: "Ophthalmology", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}oph.jpg` }],
        },
        orth: {
            title: "Orthopedic",
            modules: [
                { key: "acl", title: "ACL Reconstruction", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}acl.jpg` },
                { key: "hip", title: "Hip Replacement", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}hip.jpg` },
                { key: "knee", title: "Knee Replacement", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}knee.jpg` },
                { key: "pm", title: "Spine", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}pm.jpg` },
                { key: "orth", title: "Other Orthopedic", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}orth.jpg` },
            ],
        },
        ped: {
            title: "Pediatrics",
            modules: [{ key: "peds", title: "Pediatrics", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}peds.jpg` }],
        },
        plas: {
            title: "Plastics",
            modules: [{ key: "plas", title: "Plastics", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}plas.jpg` }],
        },
        pul: {
            title: "Pulmonology",
            modules: [{ key: "pul", title: "Pulmonology", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}pul.jpg` }],
        },
        pc: {
            title: "Primary Care",
            modules: [{ key: "pcp", title: "Primary Care", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}pcp.jpg` }],
        },
        psy: {
            title: "Psychiatry",
            modules: [{ key: "psy", title: "Psychiatry", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}psy.jpg` }],
        },
        covid: {
            title: "COVID-19",
            modules: [{ key: "psy", title: "Psychiatry", thumbnail: `${BASE_THUMBNAIL_APPS_PATH}psy.jpg` }],
            animations:[
                {
                    "type": "tutorial",
                    "title": "Animations Tutorial",
                    "id": "animations",
                    "thumbnail": "https://content.visualhealthsolutions.com/vc/modules/thumbnail/tutorial/animations.jpg",
                    "icon": "https://content.visualhealthsolutions.com/vc/media/img/icon/animations.svg",
                    "has_video": false,
                    "has_tutorial_video": true,
                    "tutorial_video": "https://s3.amazonaws.com/vhs-patientnexus/tutorials/vc/animations.mp4",
                    "children": []
                },
                {
                    "type": "animation",
                    "title": "COVID-19",
                    "id": "vpl_0932_001",
                    "thumbnail": "https://content.visualhealthsolutions.com/vc/modules/thumbnail/asset/vpl_0932_001.jpg",
                    "icon": "https://content.visualhealthsolutions.com/vc/media/img/icon/animations.svg",
                    "has_video": true,
                    "has_tutorial_video": false,
                    "video": "https://s3.amazonaws.com/vhs_web/assets/vpl_0932_001/vpl_0932_001-mp4.mp4",
                    "children": []
                },
                {
                    "type": "animation",
                    "title": "COVID-19 Testing",
                    "id": "vpl_1102_001",
                    "thumbnail": "https://content.visualhealthsolutions.com/vc/modules/thumbnail/asset/vpl_1102_001.jpg",
                    "icon": "https://content.visualhealthsolutions.com/vc/media/img/icon/animations.svg",
                    "has_video": true,
                    "has_tutorial_video": false,
                    "video": "https://s3.amazonaws.com/vhs_web/assets/vpl_1102_001/vpl_1102_001-mp4.mp4",
                    "children": []
                }
            ],
            models:[],
            illustrations:[],
            programs:[]
        },
    },
    assets: {
        "bookmarks": { title: "Bookmarks Tutorial", keywords: "" },
        "vpl_0002_001": {
            title: "The Spine",
            keywords: "Acetabular Prosthesis, Cup, Socket, Partial Hip, Hip Replacement, Total Hip, Total Hip Revision, Pelvis, Acetabulum, Orthopedic Surgery, Orthopaedic Surgery, Primary Care, General Practice, Family Practice, Radiology"
        },
        "vpl_0003_001": {
            title: "Angiogram",
            keywords: "Angiogram, Angiography, Vascular, Contrast, Fluorescence, X-Ray, Fluoroscopy, Angio, Arteries, Catheterization, Aneurysm, Radiology, Cardiology, Cardiocath Lab, Cardiothoracic, Vascular Surgeon, Orthopedic Surgery, Neurosurgery"
        },
        "vpl_0004_001": {
            title: "Angioplasty",
            keywords: "Angiogram, Angiography, Vascular, Contrast, Fluorescence, X-Ray, Fluoroscopy, Angio, Arteries, Catheterization, Aneurysm, Radiology, Cardiology, Cardiocath Lab, Cardiothoracic, Vascular Surgeon, Orthopedic Surgery, Neurosurgery"
        },
        "vpl_0005_001": {
            title: "Asthma Attack",
            keywords: "Asthma, Wheezing, Coughing, Shortness Of Breath, Lungs, Airways, Inhaler, Albuterol, Rescue Medication, Primary Care, General Practice, Family Practice, Pulmonology"
        },
        "vpl_0006_001": {
            title: "Blood Flow",
            keywords: "Heart, Heart Chambers, Blood, Blood Flow, Lungs, Atria, Ventricles, Heart Valves, Tricuspid Valve, Mitral Valve, Pulmonic Valve, Aortic Valve, Cardiology, Emergency Medicine, Primary Care, Family Practice, General Practice"
        },
        "vpl_0007_001": {
            title: "Botulinum Toxin Type A",
            keywords: "Botox, Botulinum Toxin Type A, Dermatology, Plastic Surgery, Cosmetic Surgery, Primary Care, General Practice, Family Practice"
        },
        "vpl_0008_001": {
            title: "Cesarean",
            keywords: "Cesarean, C-Section, Birth, Surgery, Pregnancy, Obstetrics, Gynecology, Emergency Care, Primary Care"
        },
        "vpl_0010_001": {
            title: "Congestive Heart Failure",
            keywords: "Heart, Cardiology, Congestive Heart Failure, Heart Failure, Shortness Of Breath, Fatigue, Cad, Coronary Artery Disease, Heart Valve, High Blood Pressure, Edema, Lung Congestion, Swollen Ankles, Rapid Heartbeat, Irregular Heart Rate, Emergency Medicine, Pathophysiology, Primary Care, General Practice, Family Practice, Cardiology, Cardiac Surgery, Cath Lab, Stent, Balloon Angioplasty"
        },
        "vpl_0012_001": {
            title: "Digestion",
            keywords: "Digestion, Liver, Gallbladder, Bile, Stomach, Intestines, Omentum, Fatty Liver Disease, Colon, Irritable Bowel, Gastroenterology, Primary Care, General Practice, Family Practice, Health And Wellness"
        },
        "vpl_0013_001": {
            title: "Distal Femur",
            keywords: "Distal Femur, Tibia, Knee Replacement Surgery, Prosthesis, Emergency Medicine, Orthopedic Surgery, Primary Care, General Practice, Family Practice, Radiology"
        },
        "vpl_0014_001": {
            title: "Enlarged Thyroid",
            keywords: "Enlarged Thyroid, Throat, Neck, Adam's Apple, Gland, Iodine, Hormones, Goiter, Cross Section, Ent-Otolaryngology, General Surgery, Pathophysiology, Primary Care, General Practice, Family Practice"
        },
        "vpl_0015_001": {
            title: "Fat Cells",
            keywords: "Fat, Cell, Cellulite, Gastroenterology,  Plastic Surgery, Primary Care, General Practice, Family Practice"
        },
        "vpl_0017_001": {
            title: "Gallstones",
            keywords: "Gallstones, Liver, Gallbladder, Bile, Digestion, Bile Duct, Dupdenum, Duodenal Papillae, Cystic Duct, Ampullae, Cholesterol, Cholecystectomy, Cholecystitis, Gastroenterology, General Surgery, Primary Care, General Practice, Family Practice, Radiology, Internest, Laproscopy, Ports, Cannula"
        },
        "vpl_0018_001": {
            title: "GERD",
            keywords: "Gerd, Stomach, Acid Reflux, Diaphragm, Heartburn, Gastroesophageal Reflux Disease, Esophagus, Vomit, Emergency Medicine, Gastroenterology, Pathophysiology, Primary Care, General Practice, Family Practice"
        },
        "vpl_0019_001": {
            title: "Hearing",
            keywords: "Hearing, Ear, Ear Canal, Tympanic Membrane, Ossicles, Cochlea, Anatomy, Wax, Ent, Otolaryngology, Neurology, Neurosurgery, Primary Care, General Practice, Family Practice"
        },
        "vpl_0020_001": {
            title: "Heart Attack",
            keywords: "Heart, Cardiology, Heart Attack, Plaque, Cholesterol, Clot, Coronary Arteries, Angina, Emergency Medicine, Pathophysiology, Primary Care, General Practice, Family Practice"
        },
        "vpl_0021_001": {
            title: "Heart Bypass Surgery",
            keywords: "Heart, Bypass Surgery, Cardiac Surgery, Coronary Artery Bypass Graft, Cabg, Atherosclerosis, Clot, Cardiology, Cardiac Surgery, Primary Care, General Practice, Family Practice, Cath Lab, Angiograph, Angiogram, Electrocardiogram"
        },
        "vpl_0024_001": {
            title: "How The Heart Works",
            keywords: "Heart, Heart Size, Heart Location, Heart Function, Heart Valves, Heart Chambers, Atria, Atrium, Blood Flow, Blood Circulation, Ventricles, Valves, Tricuspid Valve, Mitral Valve, Aortic Valve, Pulmonic Valve, Aorta, Arteries, Veins, Coronary, Sinoatrial Node, Sa Node, Atrioventricular Node, Av Node, Cardiology-Cardiac Surgery, Primary Care, Lungs, Right Ventricle, Left Atrium, Left Ventricle"
        },
        "vpl_0026_001": {
            title: "Gut Malrotation",
            keywords: "Gut Malrotation, Stomach, Duodenum, Colon, Gut, Jejunum, Ilium, Birth Deffect, Congenital, Duodenal Malrotation, Colorectal Surgery, Gastroenterology, General Surgery, Primary Care"
        },
        "vpl_0027_001": {
            title: "Migraine Headaches",
            keywords: "Migraine Headaches, Brain, Neurovascular, Emergency Medicine, Neurology, Neurosurgery, Primary Care, General Practice, Psychiatry"
        },
        "vpl_0028_001": {
            title: "Normal Birth",
            keywords: "Birth, Pregnancy, Cervix Dilation, Birthing Stations, Uterine Contractions, Womb, Vagina, Obstetrics, Gynecology, Primary Care, Family Practice, General Practice,  Emergency Care"
        },
        "vpl_0030_001": {
            title: "Normal vs Alzheimer's",
            keywords: "Alzheimer's Disease, Brains, Dementia, Acetylcholine, Amyloid Plaque, Aging, Neurons, Neurology, Neurosurgery, Primary Care, General Practice, Family Practice, Psychiatry"
        },
        "vpl_0031_001": {
            title: "Osteoarthritis of the Hip",
            keywords: "Osteoarthritis, Hip, Cartilage, Bone Spurs, Joint, Hip Replacement, Resurfacing, Acetabulum, Femur, Femoral Head, Emergency Medicine, Orthopedic Surgery, Orthpaedic Surgery, Pathophysiology, Primary Care, General Practice, Family Practice, Gerontology, Radiology"
        },
        "vpl_0034_001": {
            title: "Shoulder Dystocia",
            keywords: "Shoulder Dystocia, Birth, Pregnancy, Complications, Obstetrics-Gynecology, Primary Care"
        },
        "vpl_0036_001": {
            title: "Sinuses",
            keywords: "Sinus, Mucus, Nose, Sinusitis, Nasal, Inflammation, Surgery, Balloon, Sinuplasty, Treatment Options, Emergency Medicine, Ent, Otolaryngology, Ear, Nose, Throat, Infectious Disease, Primary Care, General Practice, Family Medicine, Pulmonology"
        },
        "vpl_0037_001": {
            title: "Skin",
            keywords: "Skin Care, Anatomy, Aging, Hair Follicles, Sweat Glands, Dermis, Epidermis, Elastin, Sun Damage, Melanin, Burn, Smoking, Exfoliation, Hydration, Dermatology, Ent, Otolaryngology, Plastic Surgery, Primary Care, General Practice, Family Practice, Health And Wellness"
        },
        "vpl_0040_001": {
            title: "Spinal Nerve",
            keywords: "Spinal Nerve, Spine, Vertebrae, Ligament, Nerve Root, Emergency Medicine, Neurology-Neurosurgery, Orthopedic Surgery, Primary Care, General Practice, Family Practice"
        },
        "vpl_0042_001": {
            title: "Spine Flex Cusion",
            keywords: "Spine, Flex Cushion, Vertebrae, Intervertebral Disks, Neurology-Neurosurgery, Orthopedic Surgery, Primary Care, Radiology"
        },
        "vpl_0044_001": {
            title: "Tension Headaches",
            keywords: "Tension Headaches, Brain, Emergency Medicine, Neurology, Neurosurgery, Primary Care, Psychiatry"
        },
        "vpl_0045_001": {
            title: "Total Hip Arthroplasty",
            keywords: "Total Hip Arthroplasty, Total Hip Replacement, Prosthesis, Acetabulum, Femur, Cartilage, Surgery, Orthopedic Surgery, Primary Care, General Practice, Family Practice, Radiology"
        },
        "vpl_0046_001": {
            title: "Total Knee Arthroplasty",
            keywords: "Total Knee Arthroplasty, Total Knee Replacement, Surgery, Patella, Femur, Tibia, Fibula, Menisci, Patellar Ligament, Cruciate Ligaments, Collateral Ligaments, Cartilage, Prosthesis, Orthopedic Surgery;Primary Care, General Practice, Family Practice, Radiology"
        },
        "vpl_0047_001": {
            title: "Types of Headaches",
            keywords: "Headaches, Tension, Cluster, Migraine, Brain, Emergency Medicine, Ent, Otolaryngology, Neurology, Neurosurgery, Primary Care, General Practice, Family Practice, Psychiatry"
        },
        "vpl_0048_001": {
            title: "Vertebral Column",
            keywords: "Vertebral Column, Vertebrae, Vertebra, Spinal Column, Spinal Canal, Spinal Cord, Nerves, Emergency Medicine, Neurology, Neurosurgery, Orthopedic Surgery, Primary Care, General Practice, Family Practice, Radiology"
        },
        "vpl_0049_001": {
            title: "Stomach Stapling Surgery",
            keywords: "Stomach Stapling Surgery, Weight Control, Digestion, Gastroenterology, General Surgery;Primary Care, General Practice, Family Practice"
        },
        "vpl_0050_001": {
            title: "Gastric Banding Surgery",
            keywords: "Gastric Banding Surgery, Weight Control, Stomach, Digestion, Gastroenterology, Bariatric Surgeon, General Surgery, Primary Care"
        },
        "vpl_0051_001": {
            title: "Gastric Bypass Surgery",
            keywords: "Gastric Bypass Surgery, Stomach Stapling, Bariatric Surgery, Stomach, Digestion, Weight Control, Roux-En-Y Bypass, Intestines, Gastroenterology, General Surgery,  Primary Care, General Practice, Family Practice"
        },
        "vpl_0052_001": {
            title: "Peptic Ulcer",
            keywords: "Peptic Ulcer, Stomach, Digestion, Hydrochloric Acid, Pepsin, Intestine, Mucus, Emergency Medicine, Gastroenterology, Primary Care, Family Practice, General Practice"
        },
        "vpl_0053_001": {
            title: "GERD",
            keywords: "Gerd, Gastroesophageal Reflux Disease, Chronic Heartburn, Stomach, Esophagus, Acid, Emergency Medicine, Gastroenterology, Pathophysiology, Primary Care, General Practice, Family Practice"
        },
        "vpl_0054_001": {
            title: "Heartburn",
            keywords: "Heartburn, Stomach, Esophagus, Acid, Emergency Medicine, Gastroenterology, Pathophysiology, Primary Care, General Practice, Family Practice"
        },
        "vpl_0055_001": {
            title: "Whiplash",
            keywords: "Whiplash, Injury, Neck, Emergency Medicine, Neurology, Neurosurgery, Orthopedic Surgery, Primary Care, General Practice, Family Practice, Radiology"
        },
        "vpl_0057_001": {
            title: "Influenza",
            keywords: "Influenza, Flu, Virus, Respiratory, Infection, Illness, Contagious, Emergency Medicine, Infectious Disease, Primary Care, Family Practice, Primary Care"
        },
        "vpl_0059_001": {
            title: "Stages of Labor",
            keywords: "Stages Of Labor, Birth, Pregnancy, Cervix, Effacement, Placental Delivery, Contractions, Obstetrics, Gynecology, Primary Care, General Practice, Family Practice, Obgyn"
        },
        "vpl_0061_001": {
            title: "Embryo",
            keywords: "Embryo, Pregnancy, Growth, Development, Obstetrics-Gynecology, Pediatrics, Primary Care, General Practice, Family Practice"
        },
        "vpl_0062_001": {
            title: "Vision",
            keywords: "Vision, Eye, Cornea, Lens, Retina, Optic Nerve, Sclera, Anterior Chamber, Posterior Chamber, Macula, Optic Cup, Rods, Cones, Vitreous, Gel, Aqueous, Ophthalmology, Primary Care, Family Practice, General Practice, Optometrist"
        },
        "vpl_0065_001": {
            title: "Ventricular Fibrillation",
            keywords: "Heart, Heart Beat, Pacemaker Cells, Sinoatrial Node, Sa Node, Atrioventricular Node, Av Node, Atrium, Atria, Ventricles, Ventricular Fibrillation, V-Fib, Vf, Heart Electrical System, Cardiology, Cardiac Surgery, Emergency Medicine, Pathophysiology, Primary Care, Family Practice, General Practice"
        },
        "vpl_0067_001": {
            title: "Osteoarthritis of the Knee",
            keywords: "Osteoarthritis, Knee, Femur, Tibia, Patella, Cartilage, Djd, Degenerative Joint Disease, Arthritis, Ligaments, Tendons, Muscles, Emergency Medicine, Orthopedic Surgery, Pathophysiology, Primary Care, General Practice, Family Practice, Radiology"
        },
        "vpl_0068_001": {
            title: "Valve Replacement",
            keywords: "Heart, Heart Valve, Heart Valve Replacement, Valve Replacement, Artificial Valve, Tissue Valve, Mechanical Valve,  Porcine Valve, Blood Thinner, Coumadin, Warfarin, Bicuspid Valve, Tricuspid Valve, Pulmonic Valve, Mitral Valve, Aortic Valve, Heart Surgery, Cardiac Surgery, Heart Lung Machine, Bypass Machine, Minimally Invasive Repacement, A Fib, Afib, Atrial Fibrillation, Stroke, Cardiology, Cardiac Surgery, Emergency Medicine, Primary Care, General Practice, Family Practice"
        },
        "vpl_0069_001": {
            title: "Sinus Headache",
            keywords: "Sinus Headache, Cold, Allergies, Congestion, Mucus, Headache, Sinus, Emergency Medicine, Ent, Otolaryngology, Ear, Nose, Throat, Primary Care, General Practice, Family Practice"
        },
        "vpl_0070_001": {
            title: "Sunburn",
            keywords: "Sunburn, Skin, Ultraviolet, Uv Rays, Sunscreen, Sun Protection Factor, Spf, Uva, Uvb, Damage, Cancer, Aging, Wrinkles, Sunspots, Dermatology, Emergency Medicine, Primary Care, General Practice, Family Practice, Pediatrics, Health And Wellness"
        },
        "vpl_0071_001": {
            title: "Skin Resurfacing",
            keywords: "Skin Resurfacing, Microdermabrasion, Moisturizer, Lanolin, Microabrasion, Melanoma, Exfoliation, Rejuvination, Skin, Resurfacing, Youth, Dermatology, Primary Care, Family Medicine, General Practice, Health And Wellness, Plastic Surgery, Cosmetic Surgery, Oncology, Gerontology"
        },
        "vpl_0072_001": {
            title: "Dry Skin",
            keywords: "Dry Skin, Natural Oils, Soaps, Moisturizers, Lanolin, Dermatology, Primary Care, Health And Wellness, General Practice, Family Care, Nutritionist"
        },
        "vpl_0073_001": {
            title: "Carotid Artery Disease",
            keywords: "Carotid Artery, Carotid Arteries, Neck, Angioplasty, Balloon Catheter, Stent, Surgery, Vascular Specialist, Pad, Cardiology, Cardiac Surgery, Primary Care"
        },
        "vpl_0075_001": {
            title: "Intrathecal Pump",
            keywords: "Intrathecal Pump, Spine, Spinal Cord, Implant, Medicine, Chronic Pain, Multiple Sclerosis, Neurology, Neurosurgery, Orthopedic Surgery, Primary Care, Family Practice, General Practice, Anethesia, Radiology"
        },
        "vpl_0076_001": {
            title: "Herniated Disk",
            keywords: "Herniated Disk, Spine, Vertebrae, Vertebra, Spinal Cord, Pain, Damage, Injury, Nerve, Column, Nucleus Pulposus, Fibrous Anular Ring, Peripheral Nerve, Roots, Pinched Nerve,  Emergency Medicine, Neurology, Neurosurgery, Orthopedic Surgery, Pathophysiology, Primary Care, Family Practice, General Practice, Hd, Chiropractor, Anesthesiology, Radiology"
        },
        "vpl_0077_001": {
            title: "Spinal Stenosis",
            keywords: "Spinal Stenosis, Spine, Vertebrae, Vertebra, Stenosis, Narrowing, Spinal Column, Spinal Cord, Spinal Canal, Cervical, Thoracic, Lumbar, Narrowed Opening, Emergency Medicine, Neurology, Neurosurgery, Orthopedic Surgery, Primary Care, Family Practice, General Practice, Radiology"
        },
        "vpl_0078_001": {
            title: "Spinal Instrumentation",
            keywords: "Spinal Instrumentation, Spine, Vertebra, Vertebrae, Rods, Screws, Pins, Fixation, Stabilization, Surgery, Arthritis, Neurology, Neurosurgery, Orthopedic Surgery, Radiology"
        },
        "vpl_0079_001": {
            title: "Sciatica",
            keywords: "Sciatica, Spine, Vertebra, Vertebrae, Lumbar, Cauda Equina, Spinal Column, Spinal Cord, Sciatic Nerve, Spinal Canal, Herniated Disk, Ruptured, Spinal Stenosis, Emergency Medicine, Neurology, Neurosurgery, Orthopedic Surgery, Primary Care, Family Practice, General Practice, Mri, Ct"
        },
        "vpl_0080_001": {
            title: "Spinal Fusion",
            keywords: "Spinal Fusion, Spine, Vertebra, Vertebrae, Surgery, Screws, Rods, Autologous Graft, Bone Graft, Stabilization, Pain, Pinched Nerve, Neurology, Neurosurgery, Orthopedic Surgery, Radiology"
        },
        "vpl_0093_001": {
            title: "Mitral Valve Prolapse",
            keywords: "Heart, Cardiology, Heart Valve, Mitral Valve, Mitral Valve Prolapse, Retrograde Flow, Left Atrium, Left Ventricle, Leaflets, Ballooning, Ring, Prosthesis, Surgical Repair, Cardiology, Cardiac Surgery, Emergency Medicine, Pathophysiology, Primary Care, Family Practice, General Practice, Flow Test, Fluoroscopy, Cardiac Catheterization, Doppler"
        },
        "vpl_0095_001": {
            title: "Aortic Regurgitation",
            keywords: "Heart, Cardiology, Heart Valves, Aortic Regurgitation, Atria, Ventricles, Tricuspid Valve, Pulmonic Valve, Mitral Valve, Aortic Valve, Leaflets, Regurgitation, Valve Replacement, Cardiology, Cardiac Surgery, Emergency Medicine, Pathophysiology, Primary Care, Family Practice, General Practice"
        },
        "vpl_0096_001": {
            title: "What Is Aortic Valve Stenosis?",
            keywords: "Heart, Heart Valves, Heart Chambers, Atria, Ventricles, Tricuspid Valve, Pulmonic Valve, Mitral Valve, Aortic Valve, Leaflets, Aorta, Aortic Valve Stenosis, Heart Murmur, Congenital Heart Defect, Rheumatid Fever, Calcium Build Up, Doppler, Echocardiogram, Electrocardiogram, Mri, Ct, Chest X-Ray, Stress Test, Cardiac Catheterization, Cardiology, Cardiac Surgery, Emergency Medicine, Radiology, Pathophysiology, Primary Care, General Practice, Family Practice"
        },
        "vpl_0098_001": {
            title: "Back Pain",
            keywords: "Back Pain, Spinal Column, Vertebra, Vertebrae, Disks, Spine, Cervical, Thoracic, Lumbar, Sacrum, Coccyx, Tailbone, Ligaments, Muscles, Pain Management, Emergency Medicine, Orthopedic Surgery, Neurosurgery, Radiologist, Interventional Radiologist, Pathophysiology, Primary Care, General Practice, Family Practice"
        },
        "vpl_0099_001": {
            title: "Blood Clot",
            keywords: "Blood Clot, Clotting, Blood Vessels, Blood Flow, Embolus, Thrombus, Smoking, Risk Factors, Cardiology, Cardiac Surgery, Emergency Medicine, Pathophysiology, Primary Care, Family Practice, General Practice"
        },
        "vpl_0100_001": {
            title: "In Vitro Fertilization",
            keywords: "In Vitro Fertilization, Fertilization, Pregnancy, Egg, Sperm, Lab Setting, Microscope, Petri Dish, Obstetrics, Gynecology, Obgyne, Primary Care, Family Practice, General Practice"
        },
        "vpl_0102_001": {
            title: "Skin Aging",
            keywords: "Skin Aging, Cells, Dermis, Elastin, Collagen, Muscles, Fat, Age Spots, Cancer, Dermatology, Primary Care, Family Practice, General Practice"
        },
        "vpl_0111_001": {
            title: "ACL Reconstruction",
            keywords: "Acl Reconstruction, Acl, Knee, Patella, Ligaments, Anterior Cruciate, Thighbone, Femur, Shinbone, Tibia, Fibula, Surgery, Graft, Joint, Orthopedic Surgery, Emergency Care, Primary Care, Family Practice, General Practice, Physical Therapy"
        },
        "vpl_0112_001": {
            title: "Allergies (Pediatric)",
            keywords: "Pediatrics, Child, Children, Allergies, Allergy, Allergic Reaction, Hay Fever, Bee Stings, Latex, Hives, Allergen, Immune Response, Nebulizer, Anaphalaxis, Primary Care, Family Practice, General Practice, Emergency Care, Eye, Ear, Nose And Throat, Immunologist, Pediatrician, Internist, Allergist, Pulmonologist, Ent, System"
        },
        "vpl_0113_001": {
            title: "Appendicitis (Pediatric)",
            keywords: "Appendicitis, Pediatric, Appendix, Appendectomy, Surgery, Inflammation, Infection, Emergency Medicine, Gastroenterology, Pediatrics;Primary Care, Family Practice, General Practice"
        },
        "vpl_0114_001": {
            title: "Forearm Fracture (Pediatric)",
            keywords: "Forearm Fracture, Pediatric, Radius, Ulna, Growth Plate, Injury, Surgery, Greenstick, Comminuted, Incomplete, Spiral, Compound, Simple, X-Ray, Splint Radiology, Emergency Medicine, Orthopedic Surgery, Pediatrics, Primary Care, Family Practice, General Practice"
        },
        "vpl_0115_001": {
            title: "Pediatric Asthma",
            keywords: "Allergy, Asthma , Pediatric, Lungs, Inflammation, Airways, Mucus, Allergist, Emergency Medicine, Ent, Otolaryngology, Pediatrics, Primary Care, Family Practice, General Practice, Respiratory, Immunology, Pulmonologist"
        },
        "vpl_0117_001": {
            title: "Cleft Lip & Palate",
            keywords: "Cleft Lip, Cleft Palate, Pediatric, Surgery, Mouth, Face, Reconstruction, Pediatrics, Plastic Surgery, Primary Care, General Practice, Family Practice, Maxillofacial Surgery, Dentistry, Dental Surgery, Oral Surgery"
        },
        "vpl_0119_001": {
            title: "Common Cold",
            keywords: "Common Cold, Pediatric, Infection, Virus, Respiratory, Prevention, Pediatrics, Primary Care, General Practice, Family Practice"
        },
        "vpl_0120_001": {
            title: "Hip Dysplasia",
            keywords: "Hip Dysplasia, Pediatric, Hip Joint, Thighbone, Femur, Ligaments, Socket, Femoral Head, Femoral Neck, Pelvis, Acetabulum, Orthopedic Surgery, Pediatrics, Primary Care, Family Practice, General Practice"
        },
        "vpl_0121_001": {
            title: "Insulin Injection",
            keywords: "Diabetes, Insulin Injection, Short-Acting, Regular, Intermediate-Acting, Nph, Lente, Long-Acting, Ultralente, Blood Sugar, Blood Glucose, Sugar, Carbohydrates, Hypodermic, Needle, Hypoglycemia, Hyperglycemia, Primary Care, Endocrinology, Emergency Medicine, General Practice, Family Practice, Pediatrics, Nutricianist"
        },
        "vpl_0123_001": {
            title: "Ear Infection / Tubes",
            keywords: "Middle Ear Infection, Tubes, Ear Tubes, Pediatric, Ear Drum, Eustachian Tube, Infection, Bacteria, Surgery, Fluid, Ent, Otolaryngology, Otorhinolaryngology, Pediatrics, Primary Care, General Practice, Family Practice"
        },
        "vpl_0124_001": {
            title: "Flu",
            keywords: "Flu, Influenza, Respiratory, Virus, Infection, Contageous, Prevention;Primary Care, General Practice, Family Practice, Emergency Care"
        },
        "vpl_0125_001": {
            title: "Influenza",
            keywords: "Flu, Influenza, Pediatric, Respiratory, Virus, Infection, Prevention, Pediatrics, Primary Care, General Practice, Family Practice, Emergency Medicine"
        },
        "vpl_0126_001": {
            title: "Ankle Fracture",
            keywords: "Ankle Fracture, Pediatric, Injury, Tibia, Fibula, Talus, Ankle, Calcaneus, Growth Plate, Open Fracture. Compound Fracture, Closed Fracture, Spiral Fracture, Green Fracture Emergency Medicine, Orthopedic Surgery, Pediatrics, Primary Care, Emergency Medicine, Primary Care, General Practice, Sports Medicine"
        },
        "vpl_0127_001": {
            title: "Broken Elbow (Pediatric)",
            keywords: "Broken Elbow, Fracture, Pediatric, Injury, Olecranon, Growth Plate, Ulna, Emergency Medicine, Orthopedic Surgery, Pediatrics, Primary Care, Family Practice, General Practice, Sports Medicine"
        },
        "vpl_0128_001": {
            title: "Finger Fracture (Pediatric)",
            keywords: "Finger Fracture, Pediatric, Growth Plate, Injury, Buddy Taping, Emergency Medicine, Orthopedic Surgery, Pediatrics, Primary Care, General Practice, Family Practice, Sports Medicine"
        },
        "vpl_0129_001": {
            title: "Knee Fracture (Pediatric)",
            keywords: "Knee Fracture, Pediatric, Injury, Femur, Tibia, Fibula, Kneecap, Patella, Growth Plate, Emergency Medicine, Orthopedic Surgery, Pediatrics, Primary Care, Family Practice, Sports Medicine, General Practice"
        },
        "vpl_0130_001": {
            title: "Broken Leg (Pediatric)",
            keywords: "Broken Leg, Fracture, Pediatric, Injury, Tibia, Shinbone, Fibula, Leg Fracture, Femur, Growth Plate, Emergency Medicine, Orthopedic Surgery, Pediatrics, Primary Care, Family Practice, Emergency Medicine, Sports Medicine, General Practice"
        },
        "vpl_0131_001": {
            title: "Metacarpal Fracture",
            keywords: "Fifth Metacarpal Fracture, Pediatric, Injury, Hand, Metacarpal, Growth Plate, Boxers Fracture, Emergency Medicine, Orthopedic Surgery, Pediatrics, Primary Care, General Practice, Family Practice, Sports Medicine, Hd, vpl_0131_001"
        },
        "vpl_0132_001": {
            title: "Wrist Fracture (Pediatric)",
            keywords: "Wrist Fracture, Pediatric, Injury, Growth Plate, Radius, Ulna, Carpals, Emergency Medicine, Orthopedic Surgery, Pediatrics, Primary Care, Family Practice, General Practice, Sports Medicine, Hd, vpl_0132_001"
        },
        "vpl_0133_001": {
            title: "Hernia (Pediatric)",
            keywords: "Hernia, Pediatric, Intestine, Bowels, Abdomen, Inguinal Hernia, Umbilical Hernia, Genetic, Pediatrics,  Primary Care, General Practice, Family Practice"
        },
        "vpl_0134_001": {
            title: "Jaundice / Billirubin",
            keywords: "Jaundice, Bilirubin, Pediatric, Liver, Sun, Bile, Red Blood Cells, Pediatrics, Primary Care, Neonatal, Family Practice, General Practice"
        },
        "vpl_0135_001": {
            title: "Pediatric Inhaler",
            keywords: "Asthma, Inhaler, Lungs, Pediatric, Metered-Dose, Medicine, Airway Obstruction, Allergy, Ent, Otolaryngology, Pediatrics, Primary Care, Pulmonology, Family Practice, General Practice"
        },
        "vpl_0136_001": {
            title: "Nasal Saline Irrigations",
            keywords: "Allergy, Nasal, Saline, Irrigations, Pediatric, Nose, Mucus, Asthma, Sinus Infection, Nostril, Prevention, Allergies, Age Related Instructions, How-To, Pediatrics, Primary Care, Family Practice, General Practice, Ent, Ear Nose Throat"
        },
        "vpl_0137_001": {
            title: "Prostate Cancer",
            keywords: "Prostate Gland, Cancer, Male Reproductive System, Prostate Specific Antigen Test, Psa, Digital Rectal Exam, Prostatectomy, Surgery, Radiation Therapy, Hormone Therapy, Watchful Waiting, Treatment Options, Pathophysiology, Primary Care, Family Practice, General Practice, Urology, Oncology"
        },
        "vpl_0138_001": {
            title: "Nursemaid's Elbow",
            keywords: "Nursemaids Elbow, Pulled Elbow, Pediatric, Injury, Radius, Ulna, Ligament, Subluxation Of The Radial Head, Emergency Medicine, Orthopedic Surgery, Pediatrics, Primary Care, General Practice, Family Practice, Urgent Care"
        },
        "vpl_0139_001": {
            title: "Pyloric Stenosis",
            keywords: "Pyloric Stenosis, Pediatric, Stomach, Small Intestine, Pylorus, Sphincter, Blockage, Pain, Illness, Surgery, General Surgery, Pediatrics, Primary Care, Family Practice, General Practice, Emergency Medicine"
        },
        "vpl_0140_001": {
            title: "Scoliosis",
            keywords: "Scoliosis, Pediatric, Vertebrae, Vertebra, Spine, Orthopedic Surgery, Orthopaedic Surgery, Pediatrics, Primary Care, General Practice, Family Practice"
        },
        "vpl_0141_001": {
            title: "Spina Bifida",
            keywords: "Spina Bifida, Pediatric, Birth Defect, Spinal Column, Spinal Membrane, Spinal Cord, Paralysis, Surgery, Treatment Options, Developmental, Growth, Neurology, Neurosurgery, Pediatrics, Primary Care, General Practice, Family Practice, Adolescent Medicine, Internal Medicine"
        },
        "vpl_0142_001": {
            title: "Stroke",
            keywords: "Stroke, Thrombotic, Embolic, Hemorrhagic, Oxygen, Blood Vessel, Brain, Heart, Blood Clot, High Blood Pressure, Carotid, Meningeal, Doppler, Contrast, Catheter, Brain Death, Pressure, Dura, Arachnoid, Subdural, Swelling, Angiography, Fluoroscopy,  Cath Lab, Emergency Medicine, Neurology, Neurosurgery, Primary Care, Family Practice, General Practice, Interventional Radiology, Mri, Ct"
        },
        "vpl_0143_001": {
            title: "Intrevertebral Disk",
            keywords: "Intervertebral Disk, Spine, Vertebrae, Spinal Column, Nucleus Pulposus, Anulus Fibrosus, Emergency Medicine, Neurology, Neurosurgery, Orthopedic Surgery,  Primary Care, Family Practice, General Practice, Radiology"
        },
        "vpl_0414_001": {
            title: "Cancer Cell",
            keywords: "Cancer, Cell, CA, Tumor Growth, pathophysiology, oncology, medical oncology, surgical oncology, radiation oncology,  primary care, general practice, family practice, Tissue"
        },
        "vpl_0415_001": {
            title: "Pneumonia",
            keywords: "pneumonia, lungs, respiratory, inflammation, infection, viral infection, virus, cold, flu, bacteria, fungi, illness, emergency medicine, pathophysiology, pulmonology"
        },
        "vpl_0417_001": {
            title: "Diabetic Neuropathy",
            keywords: "Diabetic Neuropathy, diabetes, foot, feet, demyelinization, neurology, neurosurgery, health and wellness"
        },
        "vpl_0420_001": {
            title: "Mitral Valve Repair",
            keywords: "Mitral Valve Repair, Heart, Cardiac, Surgery, Mechanical Valve, Tissue Valve, Prosthetic, Prosthesis, Blood Thinning Medication, Cardiology, Cardiac Surgery"
        },
        "vpl_0421_001": {
            title: "Aortic Valve Replacement",
            keywords: "Aortic Valve, Heart Valve, Valve Replacement, Prosthetic Valve, Tissue Valve, Mechanical Valve, Blood Thinners, Blood Clot, Anticoagulation Medicine, Cardiology, Heart Surgery, Cardiac Surgery, Cardiology, Cardiac Surgery"
        },
        "vpl_0430_001": {
            title: "Shoulder Dystocia with Brachial Plexus Injury",
            keywords: "Shoulder Dystocia, Bpi, Brachial Plexus Injury, Birth, Pregnancy, Obgyn, Obstetric, Gynecology, Emergency Medicne"
        },
        "vpl_0447_001": {
            title: "Bunion",
            keywords: "Bunion, Toe, Toes, Foot, Feet, Metatarsal, Health And Wellness, Orthopedic Surgery, Family Practice, Primary Care, General Practice"
        },
        "vpl_0448_001": {
            title: "Hammer Toe",
            keywords: "Hammer Toe, Toes, Feet, Foot, Heels, Metatarsal,  Primary Care, Family Practice, General Practice, Health And Wellness, Orthopedic Surgery"
        },
        "vpl_0449_001": {
            title: "Kidney Stones",
            keywords: "Kidney Stones, Bladder, Ureters, Kidney, Urine, Urethra, Lithotripsy, Urology, Primary Care, Family Practice, General Practice, Health And Wellness"
        },
        "vpl_0451_001": {
            title: "Testicular Cancer",
            keywords: "Testicular Cancer, Cancer, Testis, Testes, Testicle, Lymph Nodes, Scrotum, Seminoma, Nonseminoma, Biopsy, Radiation Therapy, Chemotherapy, Health And Wellness, Emergency Medicine,  Primary Care, Family Practice, General Practice, Urology, Oncology, Radiation Oncologist, Surgical Oncologist"
        },
        "vpl_0458_001": {
            title: "Celiac Disease",
            keywords: "Celiac, Disease, Protein, Gluten, Villi, Intestine, Immune System, Malabsorption, Nutrients, Malnutrition, Gastroenterology,  Primary Care, Family Practice, General Practice, Health And Wellness"
        },
        "vpl_0459_001": {
            title: "Walking / Pronation",
            keywords: "Walking, Pronation, Foot, Feet, Metatarsals, Heel, Over, Under, Pronate,  Primary Care, Family Practice, General Practice, Podiatry, Health And Wellness, Orthopedic Surgery"
        },
        "vpl_0460_001": {
            title: "Pancreatic Cancer",
            keywords: "Pancreatic Cancer, Malabsorption, Stomach, Duodenum, Pancreas, Bile, Pancreas, Bile Duct, Digestion, Tumor, Cancer, Jaundice, Liver, Intestine, Gastroenterology, Oncology,  Primary Care, Family Practice, General Practice"
        },
        "vpl_0461_001": {
            title: "Tapeworm",
            keywords: "Tapeworm, Parasite, Digestion, Intestine, Cysts, Larvae, Gastroenterology, Health And Wellness, Parasitology,  Primary Care, Family Practice, General Practice"
        },
        "vpl_0462_001": {
            title: "Thyroid",
            keywords: "Thyroid, Enlarged, Gland, Hormones, Metabolism, Pituitary, Hypothalamus, Trh, Thyrotropin Releasing Hormone, Ent, Otolaryngology, Health And Wellness, Endocrinology,  Primary Care, Family Practice, General Practice"
        },
        "vpl_0463_001": {
            title: "Pimples",
            keywords: "Pimple, Pimples, Acne, Skin, Dermatology, Sebaceous Gland, Hair Follicle, Hair, Sebum, Bacteria, Staph, Staphylococcus, Dermatology, Health And Wellness, Primary Care, Family Practice, General Practice"
        },
        "vpl_0464_001": {
            title: "Breast Cancer",
            keywords: "Breast, Cancer, Tumor, Growth, Chest, Woman, Women, Tissue, Fibrocystic, Disease, Breast Tumor, Health And Wellness, Oncology, Obgyn, Obstetrics, Gynecology,  Primary Care, Family Practice, General Practice"
        },
        "vpl_0465_001": {
            title: "Stretch Marks",
            keywords: "stretch marks, skin, epidermis, dermis, Dermatology, Health and Wellness"
        },
        "vpl_0466_001": {
            title: "Hemorrhoids",
            keywords: "Hemorrhoids, Digestion, Stool, Rectal Veins, Bowel, Bowel Movement, Constipation, Rectum, Health And Wellness, Gastroenterology, Colorectal Surgery, Proctology, Gynecology, Laproscopy, Sigmoidoscopy, Obstetrics,  Primary Care, Family Practice, General Practice, Colorectal Surgeon, Proctology"
        },
        "vpl_0467_001": {
            title: "Fibroids",
            keywords: "Fibroids, Uterus, Ovaries, Ovary, Reproduction, Female, Woman, Subserous, Pedunculated, Submucosal, Menstrual Bleeding, Tumor, Tumors, Constipation, Bladder, Laproscope, Laproscopy, Ports,  Health And Wellness,  Primary Care, Family Practice, General Practice, Obstetrics, Gynecology, Ob, Obgyn, Emergency Medicine"
        },
        "vpl_0469_001": {
            title: "Balance",
            keywords: "Balance, Motion Sickness, Vestibular System, Labyrinths, Ear, Inner Ear, Vestibular Apparatus, Health And Wellness, Ent, Otolaryngology, Primary Care, Family Practice, General Practice"
        },
        "vpl_0470_001": {
            title: "Anaphylaxis",
            keywords: "Anaphylaxis, Allergy, Allergies, Allergic Reaction, Allergen, Ige, T Cells, B Cells, Interleukins, Basophils, Mast Cells, Epipen, Epinephrine, Medical Emergency,  Primary Care, Family Practice, General Practice, Emergency Medicine"
        },
        "vpl_0471_001": {
            title: "Aging Ovaries",
            keywords: "Aging Ovaries, Ovaries, Ovary, Uterus, Follicles, Reproduction, Reproductive, Egg, Ovulation, Woman, Women, Female, Fertilization, Hormones, Lh, Fsh, Pituitary Gland, Estrogen, Progesterone, Menopause, Obstetrics, Gynecology, Ob, Obgyn,  Primary Care, Family Practice, General Practice, Health And Wellness"
        },
        "vpl_0477_001": {
            title: "Kidney Stone Formation",
            keywords: "Kidney Stones, Kidneys, Urine, Cortex, Glomerulus, Renal Calculus, Ureter, Bladder, Pain, Back, Abdomin, Health And Wellness, Gastroenterology, Emergency Medicine, Urology,  Primary Care, Family Practice, General Practice"
        },
        "vpl_0478_001": {
            title: "Male Breast Cancer",
            keywords: "Breast Cancer, Male, Men, Stroma, Lobules, Hormones, Tissue, Tumor, Estrogen, Testosterone, Radiology, Emergency Medicine, Oncology,  Primary Care, Family Practice, General Practice"
        },
        "vpl_0479_001": {
            title: "Kidney Physiology",
            keywords: "Kidney, Ureters, Stomach, Heart, Renal Arteries, Nephron, Glomerulus, Tubules, Ascending Tubule, Descending Tubule, Collecting Tubule, Urine, Bladder, Health And Wellness, Gastroenterology, Urology, Internal Medicine,  Primary Care, Family Practice, General Practice"
        },
        "vpl_0480_001": {
            title: "Dandruff",
            keywords: "Dandruff, Bacteria, Yeast, Skin, Epidermis, Hair, Scalp, Health And Wellness, Dermatology,  Primary Care, Family Practice, General Practice"
        },
        "vpl_0481_001": {
            title: "Constipation",
            keywords: "Constipation, Stool, Digestion, Digestive System, Intestine, Large Intestine, Colon, Small Intestine, Ascending Colon, Transverse Colon, Descending Colon, Rectum, Peristalsis, Diet, Stress, Health And Wellness, Gastroenterology, Primary Care, Family Practice, General Practice, Internal Medicine"
        },
        "vpl_0482_001": {
            title: "IBS",
            keywords: "Ibs, Stool, Large Intestine, Small Intestine, Digestion, Large Bowel, Colon, Irritable Bowel Syndrome, Diarrhea, Constipation, Health And Wellness, Gastroenterology, Emergency Medicine, Internest, General Practice, Family Practice, Primary Care,"
        },
        "vpl_0484_001": {
            title: "Warts",
            keywords: "Warts, Skin, Papilloma Virus, Blood Vessels, Growth, Virus, Wart, Primary Care, Family Practice, General Practice, Health And Wellness, Dermatology"
        },
        "vpl_0485_001": {
            title: "Kidney Transplant",
            keywords: "Kidney, Kidney Transplant, Renal Failure, Dialysis, Blood, Donor, Transplantation, Ureter, Bladder, Artery, Vein, Emergency Medicine, General Surgery, Gastroenterology, Transplantation, Transplant, Transplant Surgeon, Internal Medicine, Vascular Surgeon, Harvest, Pelvis"
        },
        "vpl_0486_001": {
            title: "Blackheads vs Whiteheads",
            keywords: "Blackhead, Acne, Whitehead, Pimple, Bacteria, Skin, Sebum, Comedones, Hair, Follicle, Gland, Pore, Dermatology, Primary Care, Family Practice, General Practice, Health And Wellness"
        },
        "vpl_0487_001": {
            title: "Moisturizer Absorption",
            keywords: "Moisturizer, Lotion, Skin, Absorption, Humectants, Water, Soften, Smooth, Skin Cells, Emollients, Collagen, Elastin, Dermatology, Health And Wellness, Primary Care, Family Practice, General Practice"
        },
        "vpl_0489_001": {
            title: "Amniocentesis",
            keywords: "Amniocentesis, Pregnancy, Amniotic Fluid, Amniotic Sac, Fetus, Baby, Ultrasound, Uterus, Skin Cells, Dna, Chromosomes, Genetic Disorder, Abnormality, Primary Care, Family Practice, General Practice, Obstetrics, Gynecology, Ob, Obgyn"
        },
        "vpl_0490_001": {
            title: "Compression of the IVC",
            keywords: "Compression, Ivc, Inferior Vena Cava, Pregnancy, Uterus, Baby, Blood Vessel, Heart, Blood Flow, Health And Wellness, Obstetrics, Gynecology, Ob, Obgyn,  Primary Care, Family Practice, General Practice, Emergency Medicine"
        },
        "vpl_0492_001": {
            title: "DHA in Pregnancy",
            keywords: "Dha, Pregnancy, Baby, Brain, Development, Fat, Docosahexaenoic Acid, Myelin, Nerve Fibers, Nerve Cells, Synapses, Eye, Retina, Omega-3 Fatty Acid, Essential Fatty Acid, Efa, Breast Milk, Algal Dha, Algae, Supplements, Obstetrics, Gynecology, Obgyn, Ob, Primary Care, Family Practice, General Practice, Health And Wellness"
        },
        "vpl_0494_001": {
            title: "Ectopic Pregnancy",
            keywords: "Ectopic Pregnancy, Pregnancy, Egg, Sperm, Fertilization, Uterus, Fallopian Tube, Womb, Embryo, Implantation, Tubal Pregnancy, Ovary, Primary Care, Family Practice, General Practice, Ob, Obgyn, Obstetrics, Gynecology, Emergency Medicine"
        },
        "vpl_0495_001": {
            title: "Endometriosis",
            keywords: "Endometriosis, Pregnancy, Uterus, Implants, Ovaries, Fallopian Tubes, Endometrial Cells, Menstruation, Tissue, Ovaries, Ovary, Scar Tissue, Adhesions, Pelvic Pain, Laparoscopy, Obstetrics, Gynecology, Ob, Obgyn, Primary Care, Family Practice, General Practice, Emergency Medicine"
        },
        "vpl_0496_001": {
            title: "Epidural Anesthesia",
            keywords: "Epidural Anesthesia, Labor, Pregnancy, Epidural Space, Spinal Canal, Spine, Spinal Cord, Spinal Epidural, Spinal Block, Primary Care, Obstetrics, Gynecology, Health And Wellness"
        },
        "vpl_0497_001": {
            title: "Episiotomy",
            keywords: "Episiotomy, Pregnancy, Child Birth, Perineum, Vagina, Rectum, Incision, Delivery, Obstetrics, Gynecology"
        },
        "vpl_0498_001": {
            title: "Ovarian Cyst",
            keywords: "Ovarian Cyst, Pregnancy, Pelvis, Uterus, Fallopian Tube, Ovary, Ovulation, Ampullae, Fimbria, Ovarian Ligament, Functional Cyst, Follicle, Egg, Abdominal Pain, Nausea, Vomiting, Menstrual Irregularity, Sonogram, Ovarian Cancer, Pelvic Exam, Obstetrics, Gynecology, Obgyne, Oncology, Family Practice, Primary Care, General Practice, Emergency Medicine, Radiology"
        },
        "vpl_0500_001": {
            title: "Ring of Fire",
            keywords: "Ring Of Fire, Pregnancy, Labor, Delivery, Perineum, Vagina, Rectum, Baby, Obstetrics, Gynecology"
        },
        "vpl_0501_001": {
            title: "Varicose Veins During Pregnancy",
            keywords: "Varicose Veins, Pregnancy, Heart, Blood, Blood Flow, Arteries, Veins, Blood Pressure, Valves, Baby, Uterus, Health And Wellness, Obstetrics, Gynecology"
        },
        "vpl_0502_001": {
            title: "Hashimoto's Thyroiditis",
            keywords: "Hashimoto's Thyroiditis, Thyroid, Throat, Antibodies, Hakaru Hashimoto, Enlargement, Thyroxin, Primary Care, General Surgery, Ent, Otolaryngology"
        },
        "vpl_0503_001": {
            title: "Tonsilitis",
            keywords: "Tonsillitis, Throat, Mouth, Tonsils, Tissue, White Blood Cells, Infection, Bacteria, Tonsillectomy, Primary Care, General Surgery"
        },
        "vpl_0504_001": {
            title: "Frostbite",
            keywords: "Frostbite, Frost Bite, Blood Flow, Hypothermia, Skin, Skin Cells, Tissue, Cold, Blood Vessels, Clot, Health And Wellness"
        },
        "vpl_0505_001": {
            title: "Toenail Fungus",
            keywords: "Toenail Fungus, Toes, Feet, Foot, Nail, Fungus, Dermatophytes, Fungal Spores, Hypha, Fungal Infection, Onychomycosis, Health And Wellness, Primary Care"
        },
        "vpl_0506_001": {
            title: "Diabetes",
            keywords: "Diabetes, Glucose, Blood Sugar, Sugar, Carbohydrates, Food, Insulin, Pancreas, Islets Of Langerhans, Beta Cells, Insulin, Type 1, Type 2, Juvenile Onset, Adult Onset, Weight, A1C Test, Blood Glucose Monitor, Hyperglycemia, Hypoglycemia, Health And Wellness, Emergency Medicine, Dietitian, Endicrinology Family Practice, Primary Care, General Practice"
        },
        "vpl_0509_001": {
            title: "Melanoma",
            keywords: "Melanoma, Skin, Cancer, Melanocytes, Pigment, Melanin, Skin Cells, Uv Radiation, Tanning, Sun Burn, Sun Screen, Health And Wellness, Dermatology, Oncologist, Ca, Radiation Oncologist, Surgical Oncologist, Medical Oncologist, Pathologist, Biopsy, Lymph Nodes, Adjuvent Immunotherapy, Interferon, Combination Therapies, Cancer Stages"
        },
        "vpl_0510_001": {
            title: "Mucus",
            keywords: "mucus, nose, throat, air passages, cilia, ENT, Health and Wellness, Otolaryngology"
        },
        "vpl_0511_001": {
            title: "Presbyopia with Iris Constriction",
            keywords: "Presbyopia, Iris Constriction, Iris, Eye, Vision, Lens, Retina, Pupil, Glasses, Contacts, Lens Implants, Health And Wellness, Ophthalmology"
        },
        "vpl_0513_001": {
            title: "Glaucoma",
            keywords: "Glaucoma, Eye, Vision, Pressure, Optic Nerve, Aqueous Humor, Ciliary Bodies, Iris, Posterior Chamber, Anterior Chamber, Pupil, Trabecular Network, Closed-Angle, Open-Angle, Canal Of Schlemm, Intraocular Pressure, Pressure Test, Health And Wellness, Ophthalmology, Geriatrics, General Practice, Family Practice"
        },
        "vpl_0514_001": {
            title: "Psoriasis",
            keywords: "Psoriasis, Skin, Epidermis, Dermis, Keratinocytes, Skin Cells, Dead Skin Cells, Plaque, T Cell, Cytokines, Dermatology, Primary Care, Family Practice, General Practice"
        },
        "vpl_0515_001": {
            title: "Breast Feeding",
            keywords: "Breast Feeding, Mother, Child, Infant, Baby, Nursing, Breast Milk, Epiglottis, Health And Wellness, Pediatrics"
        },
        "vpl_0516_001": {
            title: "Nose Bleed",
            keywords: "Nose Bleed, Blood, Mucus Membrane, Nose Picking, Blood Vessels, Ent, Health And Wellness, Family Practice, General Practice, Primary Care, Emergency Care"
        },
        "vpl_0517_001": {
            title: "Vitiligo",
            keywords: "Vitiligo, Skin, Depigment, Melanin, Melanocytes, Skin Color, Dermatology"
        },
        "vpl_0522_001": {
            title: "Razor Burn",
            keywords: "Razor Burn, Rash, Dry Skin, Skin, Shaving, Hair, Follicle, Inflammation, Dermatology, Health And Wellness"
        },
        "vpl_0523_001": {
            title: "Placenta Baby POV",
            keywords: "Placenta, Baby, Pov, Pregnancy, Mother, Senses, Embryo, Development, Amniotic Fluid, Womb, Health And Wellness, Pediatrics"
        },
        "vpl_0525_001": {
            title: "Burned Skin",
            keywords: "Burn, Skin, Epidermis, Dermis, First Degree, Second Degree, Third Degree, Health And Wellness, Emergency Medicine, Plastic Surgeon, Dermatologist"
        },
        "vpl_0526_001": {
            title: "Yeast Infection",
            keywords: "Yeast Infection, Fungus, Candida Albicans, C. Albicans, Vagina, Vaginal, Protective Bacteria, Itching, Burning, White Discharge, Health And Wellness, Gynecology"
        },
        "vpl_0527_001": {
            title: "Bacterial Vaginosis",
            keywords: "Bacterial Vaginosis, Bacteria, Women, Vaginal, Vagina, Yeast, Lactobacilli, Gardnerella Vaginalis, Mobiluncus, Irritation, Itching, Odor, Sticky White Discharge, Health And Wellness, Gynecology"
        },
        "vpl_0531_001": {
            title: "1st Trimester",
            keywords: "First Trimester, Pregnancy, Embryo, Fetus, Sperm, Egg, Conception, Uterus, Embryonic Stage, Fertilization, Heart, Placenta, Umbilical Cord, Health And Wellness"
        },
        "vpl_0532_001": {
            title: "2nd & 3rd Trimester",
            keywords: "Second Trimester, Third Trimester, Trimesters, Pregnancy, Placenta, Baby, Fetus, Gestation, Uterus, Health And Wellness"
        },
        "vpl_0540_001": {
            title: "Hypertensive Nephrosclerosis",
            keywords: "Hypertensive Nephrosclerosis, Kidney Damage, Kidneys, High Blood Pressure, Heart, Blood Vessels, Kidney Failure, Nephron, Arteries, Arterioles, Health And Wellness, Gastroenterology"
        },
        "vpl_0541_001": {
            title: "Ingrown Toenail",
            keywords: "Ingrown Toenail, Foot, Feet, Nail, Trimming, Toenail, Toe, Health And Wellness"
        },
        "vpl_0542_001": {
            title: "Seizure",
            keywords: "Seizure, Brain, Motor Cortex, Cerebral Cortex, Pre-Motor Cortex, Muscle Movement, Motor Neurons, Body, Convulse, Health And Wellness, Neurology"
        },
        "vpl_0544_001": {
            title: "COPD",
            keywords: "Copd, Chronic Obstructive Pulmonary Disease, Illness, Airways, Lumen, Goblet Cells, Mucus, Brachioles, Inflammatory Response, Elastase, Collagenase, Cytokines, Alveolar Wall, Destruction, Lungs, Alveoli, Reduced Lung Elastic Recoil, Macrophages, T Cells, Neutrophils, Cartilaginous Support, Pulmonology, Health And Wellness"
        },
        "vpl_0545_001": {
            title: "Amniotic Sac Breaks",
            keywords: "Amniotic Sac Breaks, Pregnancy, Birth, Birth Canal, Amniotic Fluid, Fetus, Baby, Vagina, Labor, Cervix, Sac Membrane, Health And Wellness, Obstetrics, Gynecology"
        },
        "vpl_0546_001": {
            title: "Chickenpox",
            keywords: "Chickenpox, Shingles, Vaccine, Rash, Blisters, Varicella Zoster Virus, Nerve Tissue, Spinal Column, Spinal Cord, Health And Wellness, Dermatology, Infectious Disease"
        },
        "vpl_0547_001": {
            title: "Appendicitis",
            keywords: "Appendicitis, Abdomen, Appendix, Vermiform Appendix, Small Intestine, Cecum, Bowel, Large Intestine, Stool, Pus, Digestion, Necrosis, Rupture, Peritonitis, Health And Wellness, Emergency Medicine, Gastroenterology, General Surgery, Laproscopic Surgery, Anesthesia"
        },
        "vpl_0551_001": {
            title: "Menstruation",
            keywords: "Menstruation, Menstrual Flow, Egg, Uterus, Blood, Tissue, Menstrual Cycle, Sloughing,  Flow, Health And Wellness, Gynecology, Obstetrics, Obgyn, General Practice, Primary Care, Family Practice, Womens Health, Period"
        },
        "vpl_0552_001": {
            title: "HPV",
            keywords: "Hpv, Human Papillomavirus, Cervix, Uterus, Vagina, Genital Warts, Cervical Cancer, Virus, Genome, Nucleus,  Pap Test, Std, Health And Wellness, Gynecology, Obstetrics, Dermatologist, Urologist, General Practitioner"
        },
        "vpl_0553_001": {
            title: "Alzheimer's Disease",
            keywords: "Alzheimer's Disease, Senescence, Brain, Shrinking, Tau, Nerve Cells, Neurons, Amyloid, Plaque, Neurofibrillary Tangles, Neurology, Gp, Gerontology, Geriatrician, Psychiatrist"
        },
        "vpl_0556_001": {
            title: "Edema",
            keywords: "Edema, Swelling, Interstitium, Blood Vessels, Interstitial Spaces, Capillaries, Pitting Edema, Non-Pitting Edema, Legs, Ankles, Feet, Swollen Legs, Swollen Ankles, Swollen Feet, Water Retention, Fluid Retention, Health And Wellness, General Practice, Family Physician, Primary Care, Cardiologist"
        },
        "vpl_0559_001": {
            title: "Pleghm",
            keywords: "Phlegm, Mucosa, Mucus, Cilia, Lungs, Windpipe, Trachea, Throat, Mouth, Pharynx, Respiratory, Larynx, Neck, Tongue, Health And Wellness, Ent, Otolaryngology"
        },
        "vpl_0560_001": {
            title: "Why do I have gas?",
            keywords: "Gas, Gut, Digestion, Esophagus, Stomach, Digestion, Duodenum, Intestine, Hydrogen, Carbon Dioxide, Methane, Colon, Distension, Abdomen, Bloating, Digestive Enzymes, Carbohydrates, Bacteria, Health And Wellness, Gastroenterology"
        },
        "vpl_0562_001": {
            title: "Angiogenesis and Cancer",
            keywords: "Angiogenesis, Cancer, Circulatory System, Heart, Blood, Blood Vessels, Red Blood Cells, Capillaries, Chemical Messengers, Tumor, Mestastasis, Cancer Cells, Health And Wellness, Oncology"
        },
        "vpl_0566_001": {
            title: "Cholesterol",
            keywords: "Cholesterol, Fats, Lipids, Animal Protein, Lipoprotein, Triglycerides, Chylomicron, Liver, Hepatocyte, Bile, Digestion, Hdl, Ldl,  Health And Wellness, Nutitionist, Dietician, Cardiology, Internist, Family Practice Physician, General Practice, Endocrinologist"
        },
        "vpl_0625_001": {
            title: "Biomarkers for Alzheimer's Disease",
            keywords: "Biomarkers, Alzheimers, Brain, Spinal Fluid, Spinal Cord, Plaques, Tangles, Nerve Cells, Neurons, Nerves, Protein, Tau, Amyloid Beta, Cerebrospinal Fluid, Spinal Tap, Alzheimer's Disease, Brain Scan, Neurology"
        },
        "vpl_0627_001": {
            title: "How does the pancreas help digestion?",
            keywords: "Pancreas, Abdomen, Stomach, Diabetes, Hormones, Digestive Enzymes, Small Intestine, Liver, Pancreatic Duct, Common Bile Duct, Gallbladder, Colon,  Insulin, Digestion, Sodium Bicarbonate, Nutrients, Stomach Acid, Gastroenterology"
        },
        "vpl_0628_001": {
            title: "How can acetaminophen hurt my liver?",
            keywords: "Acetaminophen, Tylenol Poisoning, Medication, Liver Damage, Stomach, Small Intestine, Liver, Napqi, Hepatocytes, Gastroenterology, Liver Function Tests, Overdose, Nausea, Vomiting, Medical Emergency, Health And Wellness"
        },
        "vpl_0629_001": {
            title: "Diabetes",
            keywords: "Diabetes, Liver, Stomach, Pancreas, Small Intestine, Hormones, Insulin, Glucose, Blood Vessels, Retinopathy, Heart Disease, Nephropathy, Neuropathy, Health And Wellness, Pathophysiology"
        },
        "vpl_0631_001": {
            title: "Symptoms of Thyroid Cancer",
            keywords: "Thyroid, Thyroid Gland, Thyroid Cancer, Follicular Thyroid Cancer, Hormones, Hoarseness, Coughing, Swallowing, Thyroid Enlargement, Ultrasound, Fine Needle Aspiration, Biopsy, Lymph Nodes, Health And Wellness, Endocrinology, Oncology"
        },
        "vpl_0632_001": {
            title: "Vocal Cords",
            keywords: "Neck, Vocal Cords, Larynx, Voice, Speech, Losing Your Voice, Hoar Sense, Ent, Otolaryngology, Health And Wellness"
        },
        "vpl_0634_001": {
            title: "Anemia",
            keywords: "Anemia, Red Blood Cells, Bone Marrow, Oxygen, Hemoglobin, Iron, Iron-Deficiency Anemia, Fatigue, Pregnancy, Blood Loss, Chronic, Hereditary, Sickle-Cell Anemia, Hemolytic Anemia, Health And Wellness, Hematology, Gerontologist, Obstetrician, General Practice Physician, Primary Care Physician"
        },
        "vpl_0635_001": {
            title: "Hemorrhagic Stroke",
            keywords: "Stroke, Blood Flow, Brain, Circulatory System, Blood Vessel, Aneurysm, Brain Cells, Medical Emergency, Hematoma, Clips, Coiling, Neurology, Neurosurgery, Interventional Radiology, Emergency Medicine, Subdural, Arachnoid, Carotid, Meningeal, Craniotomy, Family Practice, General Practice, Primary Care"
        },
        "vpl_0636_001": {
            title: "Ischemic Stroke",
            keywords: "Stroke, Blood Flow, Brain, Circulatory System, Oxygen, Silent Stroke, Tia, Bloodstream, Blood Clot, Atherosclerosis, Embolism, Thrombosis, Plaque, Brain Cells, Emergency Medicine, Neurology, Neurosurgery, Mri, Ct, Opaque Dye, Contrast Media, Radiology, Catheter, Angiogram, Radiology"
        },
        "vpl_0637_001": {
            title: "Atherosclerosis",
            keywords: "Atherosclerosis, Plaque, Vascular Disease, Arteries, Blood Vessels, Blood Clot, Coronary Artery Disease, Over Weight, High Blood Pressure, Peripheral Artery Disease, Pad, Chest Pain, Angina, Heart Attack, Carotid Arteries, Brain, Stroke, Peripheral Arterial Disease, Pad, Renal Arteries, Kidney Failure, Endothelium, Smoking, High Blood Pressure, Hypertension, Cholesterol, Diabetes, Risk Factors, Emergency Medicine, Family Practice, General Practice, Primary Care, Cardiology, Cardiac Surgery"
        },
        "vpl_0638_001": {
            title: "Aortic Valvular Disease",
            keywords: "Heart, Heart Surgery, Cardiac Surgery, Heart Valves, Aortic Valve, Heart Valve Disease, Aortic Valvular Disease, Stenosis, Regurgitation, Leaflets, Prosthetic Valve, Hepatitcalcium, Health And Wellness, Emergency Medicine"
        },
        "vpl_0639_001": {
            title: "Lasik Surgery",
            keywords: "Eye, Vision, Vision Problems, Lasik, Eye Surgery, Retina, Cornea, Refractive Errors, Laser, Laser Surgery, Microkeratome, Ophthalmology, Health And Wellness"
        },
        "vpl_0644_001": {
            title: "What Are The Heart Valves?",
            keywords: "Heart, Cardiology, Heart Anatomy, Heart Valves, Tricuspid Valve, Pulmonic Valve, Mitral Valve, Aortic Valve"
        },
        "vpl_0645_001": {
            title: "Aortic Valve",
            keywords: "Heart, Cardiology, Heart Valves, Tricuspid Valve, Pulmonic Valve, Mitral Valve, Aortic Valve, Leaflets, Aorta"
        },
        "vpl_0646_001": { title: "Angina", keywords: "Angina, Chest Pain, Heart, Coronary Arteries, Oxygen" },
        "vpl_0647_001": {
            title: "Stable Angina",
            keywords: "Angina, Chest Pain, Stable Angina, Heart, Oxygen, Plaque, Coronary Arteries"
        },
        "vpl_0648_001": {
            title: "Unstable Angina",
            keywords: "Angina, Chest Pain, Stable Angina, Unstable Angina, Heart, Oxygen, Plaque, Coronary Arteries, Blood Clot, Medical Emergency, Angiography, Blood Tests, Cathetrization, Bypass, Emergency Department, Emergency Room, Cardiology, Cath Lab, Heart Attack"
        },
        "vpl_0655_001": {
            title: "Aging Eyes",
            keywords: "Aging Vision, Eye, Retina, Lens, Cornea, Presbyopia, Farsighted, Nearsighted, Glasses, Contacts, Bifocals, Replacement Lens, Surgery, Lasik, Health And Wellness"
        },
        "vpl_0656_001": {
            title: "Cataracts",
            keywords: "Cataracts, Eye, Vision, Retina, Lens, Senile Cataract, Cloudy Vision, Surgery, Artificial Lens, Health And Wellness, Ophthalmologist, Lens Implant, Extraction, Implantation"
        },
        "vpl_0659_001": {
            title: "Urinary Tract Infection",
            keywords: "Uti, Urinary Tract Infection, Kidneys, Ureters, Bladder, Urethra, Urine, Bacteria, E. Coli, Urethritis, Cystitis, Urogenital Tract, Inflammation, Incontinence, Pain, Urination, General Practice, Family Practice, Primary Care, Urology, Obgyne, Obstetrics, Gynecology, Health And Wellness"
        },
        "vpl_0673_001": {
            title: "Diarrhea",
            keywords: "Diarrhea, Small Intestine, Colon, Stool, Secretory Diarrhea, Bacteria, Toxins, Inflammatory Diarrhea, Villi, Gut, Gastroenterology"
        },
        "vpl_0674_001": {
            title: "Pregnancy Weeks 1 to 3",
            keywords: "Pregnancy, Human Gestation, Human Development, First Trimester, Pregnancy Week 1, Pregnancy Week 2, Pregnancy Week 3, Conception, Fertilization, Egg, Sperm, Zygote, Fallopian Tube, Uterus"
        },
        "vpl_0675_001": {
            title: "Pregnancy Week 4",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Embryo, Embryonic Period, Embryonic Stage, First Trimester, Pregnancy Week 4, Zygote, Blastocyst, Cell Division, Uterus, Uterine Wall, Implantation"
        },
        "vpl_0676_001": {
            title: "Pregnancy Week 5",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Embryo, Embryonic Period, Embryonic Stage, First Trimester, Pregnancy Week 5, Neural Groove, Nervous System Development, Brain Development, Spinal Cord Development, Circulatory System Development, Heart Development, Central Nervous System Development, Gastrointestinal System Development"
        },
        "vpl_0677_001": {
            title: "Pregnancy Week 6",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Embryo, Embryonic Period, Embryonic Stage, First Trimester, Pregnancy Week 6, Neural Groove, Neural Tube, Central Nervous System Development, Brain Development, Spinal Cord Development, Heart Development, Circulatory System Development, Arm Buds, Leg Buds, Facial Development"
        },
        "vpl_0678_001": {
            title: "Pregnancy Week 7",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Embryo, Embryonic Period, Embryonic Stage, First Trimester, Pregnancy Week 7, Brain Development, Facial, Development, Eye Development, Ear Development, Arm Development, Leg Development, Lung Development"
        },
        "vpl_0679_001": {
            title: "Pregnancy Week 8",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Embryo, Embryonic Period, Embryonic Stage, First Trimester, Pregnancy Week 8, Facial Development, Brain Development, Development Of Senses, Vision, Hearing, Cerebral Cortex, Cranial Nerves, Arm Development, Leg Development, Liver, Intestines, Umbilical Cord, Prenatal Development, Embryo, Embryonic Period, Embryonic Stage"
        },
        "vpl_0680_001": {
            title: "Pregnancy Week 9",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Embryo, Embryonic Period, Embryonic Stage, First Trimester, Pregnancy Week 9, Skeletal Formation, Bone Formation, Arm Development, Leg Development, Head Development, Hand Development, Toe Formation, Heart Development, Cerebrospinal Fluid Formation"
        },
        "vpl_0681_001": {
            title: "Pregnancy Week 10",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Embryo, Embryonic Period, Embryonic Stage, First Trimester, Pregnancy Week 10, Organ Development, Genital Development, Skeletal Formation, Head Development, Hand Development"
        },
        "vpl_0682_001": {
            title: "Pregnancy Week 11",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Embryo, Embryonic Period, Embryonic Stage, First Trimester, Pregnancy Week 11, Placenta, Fetus, Fetal Growth, Liver, Red Blood Cell Formation, Genital Development, Small Intestine Development"
        },
        "vpl_0683_001": {
            title: "Pregnancy Week 12",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Embryo, Embryonic Period, Embryonic Stage, First Trimester, Pregnancy Week 12, Fetal Develpment, Fetus, Fingernail Development, Toenail Development, Brain Development, Intestinal Development, Umbilical Cord"
        },
        "vpl_0684_001": {
            title: "Pregnancy Weeks 13 to 18",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Fetus, Fetal Period, Fetal Stage, Fetal Growth, Fetal Development, Second Trimester, Pregnancy Week 13, Pregnancy Week 14, Pregnancy Week 15, Pregnancy Week 16, Pregnancy Week 17, Pregnancy Week 18, Nerve Development, Organ Development, Muscle Development, Immune System Development, Genital Development, Lung Development, Fetal Skin, Fetal Fat Storage"
        },
        "vpl_0685_001": {
            title: "Pregnancy Weeks 19 to 25",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Fetus, Fetal Period, Fetal Stage, Fetal Growth, Fetal Development, Second Trimester, Pregnancy Week 19, Pregnancy Week 20, Pregnancy Week 21, Pregnancy Week 22, Pregnancy Week 23, Pregnancy Week 24, Pregnancy Week 25, Lanugo, Melanin Production, Development Of Senses, Eyebrow Formation, Eyelash Formation, Fetal Response To Sounds, Hand Development"
        },
        "vpl_0686_001": {
            title: "Pregnancy Weeks 26 to 30",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Fetus, Fetal Period, Fetal Stage, Fetal Growth, Fetal Development, Third Trimester, Pregnancy Week 26, Pregnancy Week 27, Pregnancy Week 28, Pregnancy Week 29, Pregnancy Week 30, Eye Development, Brain Development, Lung Development, Bone Development, Fetal Vision"
        },
        "vpl_0687_001": {
            title: "Pregnancy Weeks 31 to 36",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Fetus, Fetal Period, Fetal Stage, Fetal Growth, Fetal Development, Third Trimester, Pregnancy Week 31, Pregnancy Week 32, Pregnancy Week 33, Pregnancy Week 34, Pregnancy Week 35, Pregnancy Week 36, Fetal Skin, Fetal Weight Gain, Lung Development, Fingernail Formation, Fetal Swallowing, Fetal Sucking"
        },
        "vpl_0688_001": {
            title: "Pregnancy Weeks 36 to 40",
            keywords: "Pregnancy, Human Gestation, Human Development, Prenatal Development, Fetus, Fetal Period, Fetal Stage, Fetal Growth, Fetal Development, Third Trimester, Pregnancy Week 37, Pregnancy Week 38, Pregnancy Week 39, Pregnancy Week 40, Lung Development, Body Temperature, Full-Term Infant"
        },
        "vpl_0689_001": {
            title: "Diabetic Retinopathy",
            keywords: "Diabetic Retinopathy, Retina, Eye, Vision, Capillaries, Vitreous, Diabetes, Ophthalmology"
        },
        "vpl_0690_001": {
            title: "Diabetic Ulcer",
            keywords: "Diabetic Ulcer, Diabetes, Neuropathy, Pad, Peripheral Artery Disease, Blood Vessels, Nerves, Foot, Cellulitis, Bacterial Infection, Endocrinologist, General Practice, Primary Care, Emergency Medicine, Neurologist, Mri, Ct"
        },
        "vpl_0691_001": {
            title: "Tracheobronchitis",
            keywords: "Tracheobronchitis, Trachea, Bronchi, Lungs, Virus, Inflammation, Mucus, Sputum, Pulmonology"
        },
        "vpl_0692_001": {
            title: "Lung Cancer",
            keywords: "Lung Cancer, Trachea, Cancer Cells, Tumor, Oncology, Pulmonology"
        },
        "vpl_0699_001": {
            title: "Treatment for PAD",
            keywords: "Pad, Treatment, Peripheral Artery Disease, Fluoroscopy, Contrast, Injection, Catheter, Guide Wire, Doppler, Blockage, Plaque, Artery, Arteries, Blood Flow, Percutaneous Transluminal Angioplasty, Pta, Angioplasty, Catheter, Stent, Bypass Procedure, Emergency Medicine, Cardiac Surgery, Cardiology, Cath Lab, Vascular Surgeon"
        },
        "vpl_0703_001": {
            title: "Intenstinal Obstruction",
            keywords: "Intestinal Obstruction, Bowel, Small Intestine, Duodenum, Jejunum, Ileum, Ascending Colon, Transverse Colon, Descending Colon, Sigmoid, Rectum, Large Intestine, Colon, Stomach, Digestion, Adhesions, Scope, Laproscopy, Abdominal Surgery, Scar Tissue, Veins, Arteries, Internest, Emergency Medicine, Gastroenterologist, General Surgery, Primary Care, General Practice, Family Practice"
        },
        "vpl_0706_001": {
            title: "Osteoarthritis Knee",
            keywords: "Osteoarthritis, Knee, Arthritis, Cartilage, Joint, Femur, Tibia, Fibula, Patella, Bone Spur"
        },
        "vpl_0709_001": {
            title: "Diabetes and Glucose",
            keywords: "Diabetes, Glucose, Blood, Sugar, Insulin, Cell Membrane, Receptors, Protein, Type 1, Type 2, Hyperglycemia"
        },
        "vpl_0710_001": {
            title: "Diabetes and Insulin",
            keywords: "Diabetes, Insulin, Glucose, Blood, Pancreas, Cell Membrane, Protein, Beta Cells, Hyperglycemia, Type 1, Type 2"
        },
        "vpl_0711_001": {
            title: "Type 1 Diabetes",
            keywords: "Diabetes, Type 1, Beta Cells, Insulin, Glucose, Autoimmune Disease, Pancreas, Islets Of Langerhans"
        },
        "vpl_0712_001": {
            title: "Type 1 Diabetes and Glucose",
            keywords: "Diabetes, Type 1, Glucose, Insulin, Carbohydrates, Pancreas, Hyperglycemia, Urine, Hypoglycemia, A1C, Hemaglobin, Sugar, Islets Of Langerhans, Beta Cells, Blood Glucose Monitor, Keytones, Ketoacidosis, Injection, Endocrinology, Dietician, Family Practice, General Practice, Emergency Department"
        },
        "vpl_0713_001": {
            title: "Type 2 Diabetes and Insulin",
            keywords: "Diabetes, Insulin, Pancreas, Beta Cells, Glucose"
        },
        "vpl_0714_001": {
            title: "Type 2 Diabetes",
            keywords: "Diabetes, Type 2, Insulin Resistance, Insulin, Glucose, Pancreas, Hyperglycemia"
        },
        "vpl_0717_001": {
            title: "Breast Reconstruction",
            keywords: "Tavi, Transcatheter Aortic Valve Implantation, Heart, Cardiology, Aortic Valve, Left Ventricle, Aorta, Blood, Heart Surgery, Catheter, Femoral Artery, Subclavian Artery, Replacement Valve, Cardiology, Cardiac Surgery, Emergency Medicine, Family Practice, Primary Care, General Practice"
        },
        "vpl_0719_001": {
            title: "TAVI",
            keywords: "Tavi, Transcatheter Aortic Valve Implantation, Heart, Cardiology, Aortic Valve, Left Ventricle, Aorta, Blood, Heart Surgery, Catheter, Femoral Artery, Subclavian Artery, Replacement Valve, Cardiology, Cardiac Surgery, Emergency Medicine, Family Practice, Primary Care, General Practice"
        },
        "vpl_0720_001": {
            title: "Coagulation and Antiplatelet Drugs",
            keywords: "Antiplatelet, Blood Vessel, Cut, Coagulation, Blood Clotting, Platelets, Platelet Aggregation, Fibrin, Antiplatelet Drugs, Plaque, Stent, Scar Tissue, Restenosis, Thrombosis"
        },
        "vpl_0722_001": { title: "Hernia", keywords: "" },
        "vpl_0728_001": {
            title: "Lumbar Injection Anatomy",
            keywords: "Lumbar, Anatomy, L4, L5, Facet Joint Capsule, Transverse Process, Lamina, Spinous Process, Spinal Nerve, Medial Branch, Intervertebral Foramen, Vertebral Column, Facet Joint, Lumbar Injection"
        },
        "vpl_0729_001": {
            title: "Lumbar Injection Facet Block",
            keywords: "Lumbar, Anatomy, L4, L5, Facet Joint Capsule, Transverse Process, Lamina, Spinous Process, Spinal Nerve, Medial Branch, Intervertebral Foramen, Vertebral Column, Facet Joint, Facet Block, Lumbar Injection"
        },
        "vpl_0730_001": {
            title: "Lumbar Injection Interlaminar",
            keywords: "Lumbar, Anatomy, L4, L5, Facet Joint Capsule, Transverse Process, Lamina, Spinous Process, Spinal Nerve, Medial Branch, Intervertebral Foramen, Vertebral Column, Facet Joint, Lumbar Injection, Interlaminar, Injection, Interlaminar Injection, Interlaminar Epidural Steroid Injection"
        },
        "vpl_0731_001": {
            title: "Lumbar Injection Medial Branch",
            keywords: "Lumbar, Anatomy, L4, L5, Facet Joint Capsule, Transverse Process, Lamina, Spinous Process, Spinal Nerve, Medial Branch, Intervertebral Foramen, Vertebral Column, Facet Joint, Lumbar Injection, Medial Branch Block"
        },
        "vpl_0732_001": {
            title: "Lumbar Injection Transforaminal",
            keywords: "Lumbar, Anatomy, L4, L5, Facet Joint Capsule, Transverse Process, Lamina, Spinous Process, Spinal Nerve, Medial Branch, Intervertebral Foramen, Vertebral Column, Facet Joint, Lumbar Injection, Transforaminal Epidural Steroid Injection, Transforaminal"
        },
        "vpl_0736_001": {
            title: "Acupuncture",
            keywords: "Acupuncture, Alternative Medicine, Pain, Nausea, Acupuncture Points, Pms, Migraines, Osteoarthritis, Cancer"
        },
        "vpl_0737_001": {
            title: "Ingrown Hair",
            keywords: "Ingrown Hair, Skin, Hair Follicle, Irritation, Inflammation"
        },
        "vpl_0739_001": {
            title: "Laryngitis",
            keywords: "Laryngitis, Vocal Cords, Throat, Irritation, Inflammation, Voice, Hoarse, Raspy, Blocked Airway, Chronic Laryngitis, Nerve Damage, Polyps, Nodules, Ear Nose And Throat, Ent, Family Practice, Primary Care, General Practitioner"
        },
        "vpl_0740_001": {
            title: "Cerebral Aneurysm",
            keywords: "Cerebral Aneurysm, Aneurysm, Arteries, Blood, Brain, Arterial Wall, Middle Cerebral, Circle Of Willis, Saccular Aneurysm, Berry Aneurysm, Neurosurgeon, Interventional Radiologist, Clip, Coil, Brain Bleed, Hematoma"
        },
        "vpl_0741_001": {
            title: "Rosacea",
            keywords: "Rosacea, Skin, Red, Inflamed, Face, Nose, Cheeks, Chin, Forehead, Blood Vessels, Skin Spots, Bumbs, Skin Eruptions, Swelling, Rhinophyma, Laser, Dermatology, Family Practice, Primary Care, General Practice"
        },
        "vpl_0743_001": {
            title: "Silent Reflux",
            keywords: "Silent Reflux, Laryngopharyngeal Reflux, Lpr, Gastroesophageal Reflux Disease, Gerd, Stomach Acid, Acid Reflux, Esophagus, Esophageal Sphincter, Heart Burn, Throat, Vocal Cords, Esophageal Reflux, Primary Care, Family Practice, General Practice, Internal Medicine, Laproscopy"
        },
        "vpl_0749_001": {
            title: "Cardiac Catheterization",
            keywords: "Cardiac, Catheter, Stent, Heart, Coronary Artery, Femoral Artery, Radial Artery, Angiogram, Blockage"
        },
        "vpl_0761_001": {
            title: "Aortic Valve Stenosis",
            keywords: "heart, heart valves, heart chambers, stenosis, atria, ventricles, tricuspid valve, pulmonic valve, mitral valve, aortic valve, leaflets, aorta, aortic valve stenosis, heart murmur"
        },
        "vpl_0764_001": {
            title: "Urinary Stess Incontinence",
            keywords: "Incontinence, urethra, bladder, vaginal tape, surgery, pelvic floor, women"
        },
        "vpl_0769_001": {
            title: "Afib and Pulmonary Vein Isolation",
            keywords: "Atrial Fibrillation, AFib, A Fib, Heart, Cardiac, Cardio"
        },
        "vpl_0770_001": {
            title: "Biventricular ICD",
            keywords: "heart, heart chambers, cardiac resynchronization therapy, crt, afib, biventricular pacing, defibrillator, icd, implantable cardiac defibrillator, pacemaker, biventricular icd"
        },
        "vpl_0771_001": { title: "Pacemaker", keywords: "pacemaker, heart" },
        "vpl_0772_001": {
            title: "Achilles Tendon: Anatomy and Function",
            keywords: "Achilles Tendon, Anatomy and Function, foot, calf muscle, gastrocnemius, soleus, heel bone, calcaneus, ankle"
        },
        "vpl_0773_001": {
            title: "Achilles Tendon: Complete Rupture",
            keywords: "Achilles Tendon, Complete Rupture, foot, calf muscle, gastrocnemius, soleus, heel bone, calcaneus, ankle, injury"
        },
        "vpl_0774_001": {
            title: "Achilles Tendon: Partial Tear",
            keywords: "Achilles Tendon, Partial Tear, foot, calf muscle, gastrocnemius, soleus, heel bone, calcaneus, ankle, injury"
        },
        "vpl_0775_001": {
            title: "Achilles Tendon: Repair for Complete Rupture",
            keywords: "Achilles Tendon, Repair for Complete Rupture, foot, calf muscle, gastrocnemius, soleus, heel bone, calcaneus, ankle, injury, recovery, prevention, stretch"
        },
        "vpl_0776_001": {
            title: "Achilles Tendon: Recovery from Partial Tear",
            keywords: "Achilles Tendon, Recovery from Partial Tear, foot, calf muscle, gastrocnemius, soleus, heel bone, calcaneus, ankle, injury, recovery, prevention, stretch"
        },
        "vpl_0777_001": {
            title: "Ankle Sprain",
            keywords: "Ankle, Sprain, visual consult, foot, leg, bone, talus, fibula, tibia, running, exercise, injury, inversion, eversion, ligaments, anterior talofibular, "
        },
        "vpl_0778_001": {
            title: "Ankle Anatomy",
            keywords: "Ankle Anatomy, visual consult, foot, leg, tibia, fibula, talus"
        },
        "vpl_0779_001": {
            title: "Ankle Fracture",
            keywords: "Ankle Fracture, foot, visual consult, fibula, tibia, talus, injury, lateral malleolus, medial malleolus, bimalleolar fracture, trimalleolar fracture"
        },
        "vpl_0780_001": {
            title: "Ankle Fracture Treatement",
            keywords: "Ankle Fracture, Treatment, foot, injury, repair"
        },
        "vpl_0781_001": {
            title: "Low Anterior Resection",
            keywords: "low anterior resection, LAR, cancer, rectum, colon, anus, digestion, intestine, anastomosis, surgery, ileostomy, stoma, ostomy"
        },
        "vpl_0782_001": {
            title: "Abdominoperineal Resection",
            keywords: "Abdominoperineal Resection, APR, colorectal cancer, colon, rectum, intestine, sigmoid colon, anus, colostomy, stoma"
        },
        "vpl_0787_001": {
            title: "Distal Pancreatectomy",
            keywords: "distal pancreatectomy, pancreatic cancer, pancreas, stomach, spine, hormones, digestive enzymes, surgery, cancer, spleen"
        },
        "vpl_0788_001": {
            title: "Total Pancreatectomy",
            keywords: "total pancreatectomy, pancreatic cancer, pancreas, stomach, spine, hormones, digestive enzymes, surgery, cancer, spleen, gall bladder, common bile duct"
        },
        "vpl_0789_001": {
            title: "Liver Resection",
            keywords: "liver, resection, diaphragm, surgery, stomach, cancer, wedge, sectionectomy, extended hepatectomy"
        },
        "vpl_0790_001": {
            title: "Whipple Procedure",
            keywords: "pancreatoduodenectomy, pancreatic cancer, pancreas, stomach, spine, hormones, digestive enzymes, surgery, cancer, spleen, gall bladder, small intestine, common bile duct, pylorus"
        },
        "vpl_0795_001": {
            title: "Cancer and Bone Health",
            keywords: "cancer, cells, tumor, metastasis, bone, osteoblasts, osteoclasts"
        },
        "vpl_0797_001": {
            title: "Chemotherapy",
            keywords: "chemotherapy, chemo, cancer, cell, neutropenia, blood cells"
        },
        "vpl_0798_001": {
            title: "Neutropenia",
            keywords: "white blood cells, blood, neutrophil, immune system, bones, marrow, bacteria, cancer, chemotherapy"
        },
        "vpl_0800_001": {
            title: "Anti-Reflux Surgery",
            keywords: "anti-reflux surgery, GERD, digestion, esophagus, stomach, lower esophageal sphincter, LES, heartburn"
        },
        "vpl_0802_001": { title: "Sclerotherapy", keywords: "sclerotherapy, varicose veins, spider veins" },
        "vpl_0803_001": {
            title: "Thyroidectomy",
            keywords: "thyroidectomy, thyroid, hormones, throat, metabolism, surgery, tumor"
        },
        "vpl_0804_001": {
            title: "Upper Endoscopy",
            keywords: "upper endoscopy, endoscopy, EGD, digestion, esophagus, stomach, intestine, endoscope"
        },
        "vpl_0805_001": { title: "Colonoscopy", keywords: "colonoscopy, colon, large intestine, colonoscope, polyp" },
        "vpl_0806_001": {
            title: "Tonsillectomy and Adenoidectomy",
            keywords: "tonsillectomy, adenoidectomy, tonsils, adenoids, T&A, throat, surgery"
        },
        "vpl_0809_001": {
            title: "High Blood Pressure",
            keywords: "high blood pressure, hypertension, artery, blood flow"
        },
        "vpl_0810_001": {
            title: "Sleep Apnea",
            keywords: "Sleep Apnea, snoring, sleep cycle, airway obstruction, tongue, soft palate, nasopharynx, obstructive sleep apnea, sleep lab, insomnia, Otolaryngology"
        },
        "vpl_0932_001": {
            title: "COVID-19 (Coronavirus)",
            keywords: "coronavirus, covid-19, SARS-CoV-2, sars-cov-2, virus, pandemic, outbreak, disease, severe acute respiratory syndrome, virus, lungs"
        },
        "vpl_0934_001": { title: "Sepsis", keywords: "sepsis, infection, blood, immune system, inflammation" },
        "vpl_0945_001": {
            title: "Opioids",
            keywords: "opioids, drugs, pain, medication, prescription, nerve, spinal cord, brain, opioid receptors, addiction, dopamine, tolerance, dependence, overdose"
        },
        "vpl_0969_001": {
            title: "Anticholinergics",
            keywords: "Anticholinergics, acetylcholine, brain, neuron, smooth muscle, relaxation, synapse, inhibition, drugs, membrane, CVS, neurotransmitter, neurotransmitters"
        },
        "vpl_0973_001": {
            title: "SSRI",
            keywords: "drugs, serotonin, selective serotonin re-uptake inhibitors, inhibition, nerve, neuron, brain"
        },
        "vpl_0989_001": {
            title: "Vaccines",
            keywords: "vaccines, immune system, virus, bacteria, antibody, antibodies, antigens"
        },
        "vpl_1017_001": {
            title: "Total Shoulder Replacement",
            keywords: "total shoulder replacement, TSR, shoulder, socket, joint, humerus, scapula, arthritis"
        },
        "vpl_1200_001": {
            title: "Total Hip Replacement",
            keywords: "total hip replacement, thp, hip, socket, joint, arthritis"
        },
        "vpl_1201_001": {
            title: "Total Knee Replacement",
            keywords: "total shoulder replacement, tkr, knee, socket, joint, arthritis"
        },
        "vpl_1102_001": {
            title: "COVID-19 Testing",
            keywords: "coronavirus, covid-19, SARS-CoV-2, sars-cov-2, virus, pandemic, outbreak, disease, severe acute respiratory syndrome, virus, lungs, testing, pcr, antigen"
        },

        "vpl_0144_001": {
            title: "Coronary Artery Bypass Grafting", keywords: "",
            chapters: [["vpl_0144_000", "Program Preview", "2:39"],
            ["vpl_0144_000", "Introduction", "1:06"],
            ["vpl_0144_001", "Before Surgery", "3:13"],
            ["vpl_0144_002", "Day of Surgery", "1:06"],
            ["vpl_0144_003", "Coronary Artery Bypass Graft", "10:39"],
            ["vpl_0144_004", "After Surgery", "3:25"],
            ["vpl_0144_005", "Discharge", "1:49"],
            ["vpl_0144_006", "Conclusion", "0:32"]]
        },

        "vpl_0145_001": {
            title: "Diabetes", keywords: "",
            chapters: [["vpl_0145_000", "Program Preview", "1:00"],
            ["vpl_0145_001", "Introduction", "1:56"],
            ["vpl_0145_002", "Understanding The Basics", "17:21"],
            ["vpl_0145_003", "Healthy Eating", "19:25"],
            ["vpl_0145_004", "Physical Activity", "8:42"],
            ["vpl_0145_005", "Blood Sugar Balance", "16:17"],
            ["vpl_0145_006", "Medications", "11:25"],
            ["vpl_0145_007", "Risk Reduction", "11:33"],
            ["vpl_0145_008", "Special Situations", "13:47"],
            ["vpl_0145_009", "Summary", "8:42"]]
        },

        "vpl_0146_001": {
            title: "Lower Back Pain Management", keywords: "",
            chapters: [["vpl_0146_000", "Program Preview", "0:56"],
            ["vpl_0146_001", "Introduction", "1:28"],
            ["vpl_0146_002", "Anatomy and Physiology", "4:05"],
            ["vpl_0146_003", "About Lower Back Pain", "14:45"],
            ["vpl_0146_004", "What Can I Do To Feel Better", "13:42"],
            ["vpl_0146_005", "Advanced Treatments", "13:06"]]
        },

        "vpl_0147_001": {
            title: "A Patient's Guide to PCI", keywords: "",
            chapters: [["vpl_0147_000", "Program Preview", "0:46"],
            ["vpl_0147_001", "Introduction", "1:37"],
            ["vpl_0147_002", "Preparing For Your Procedure", "3:38"],
            ["vpl_0147_003", "Percutaneous Coronary Intervention", "5:24"],
            ["vpl_0147_004", "After Your Procedure", "2:16"],
            ["vpl_0147_005", "Conclusion", "0:30"]]
        },

        "vpl_0426_001": {
            title: "Heart Failure", keywords: "",
            chapters: [["vpl_0426_000", "Program Preview", "0:47"],
            ["vpl_0426_001", "Normal Heart Function", "1:52"],
            ["vpl_0426_002", "What is Heart Failure?", "2:32"],
            ["vpl_0426_003", "Diagnosis of Heart Failure", "1:28"],
            ["vpl_0426_004", "Classification of Heart Failure", "0:55"],
            ["vpl_0426_005", "Management of Heart Failure", "4:15"],
            ["vpl_0426_006", "Guidelines for Living With Heart Failure", "3:47"],
            ["vpl_0426_007", "Heart Failure Action Plan", "1:18"],
            ["vpl_0426_008", "Symptoms of Worsening Heart Failure", "1:06"],
            ["vpl_0426_009", "Prevention of Heart Failure", "0:37"]]
        },

        "vpl_0554_001": {
            title: "ACL Repair", keywords: "",
            chapters: [["vpl_0554_000", "Program Preview", "0:40"],
            ["vpl_0554_001", "Opening", "0:38"],
            ["vpl_0554_002", "Introduction", "0:37"],
            ["vpl_0554_003", "Anatomy of the Knee", "2:56"],
            ["vpl_0554_004", "Ligament Injuries", "2:46"],
            ["vpl_0554_005", "ACL Injuries", "1:24"],
            ["vpl_0554_006", "Diagnosis", "0:55"],
            ["vpl_0554_007", "Reconstruction", "6:21"],
            ["vpl_0554_008", "After Surgery", "0:59"],
            ["vpl_0554_009", "Rehabilitation", "2:33"],
            ["vpl_0554_010", "Non-surgical Treatment", "3:09"]]
        },

        "vpl_0747_001": {
            title: "Robotic Assisted Laparoscopic Surgery", keywords: "",
            chapters: [["vpl_0747_000", "Introduction", "1:48"],
            ["vpl_0747_001", "Preparing For Surgery", "7:38"],
            ["vpl_0747_002", "Surgery", "5:26"],
            ["vpl_0747_003", "After Surgery", "14:39"],
            ["vpl_0747_004", "Conclusion", "0:20"],
            ["vpl_0747_007", "How To Care For Your Catheter", "4:00"],
            ["vpl_0747_008", "How To Use A Leg Bag", "2:24"],
            ["vpl_0747_009", "Pelvic Floor Muscle Exercises", "2:32"]]
        },
        /*[ "Meet The Team", "9:13", "vpl_0747_005"],
        [ "Clinical Trials", "2:03", "vpl_0747_006"],
        [ "Resources And Contact", "2:00", "vpl_0747_010"]*/

        "vpl_0762_001": {
            title: "Total Knee Replacement", keywords: "",
            chapters: [["vpl_0762_000", "Program Preview", "0:22"],
            ["vpl_0762_001", "Introduction", "1:15"],
            ["vpl_0762_002", "Anatomy and Arthritis", "2:25"],
            ["vpl_0762_003", "Treatment Options", "3:58"],
            ["vpl_0762_004", "Total Knee Replacement", "1:12"],
            ["vpl_0762_005", "Preparations for Surgery", "4:58"],
            ["vpl_0762_006", "Risks and Potential Complications", "3:04"],
            ["vpl_0762_007", "The Surgical Procedure", "2:00"],
            ["vpl_0762_008", "After Your Surgery", "3:01"],
            ["vpl_0762_009", "Conclusion", "1:29"]]
        },

        "vpl_0763_001": {
            title: "Total Hip Replacement", keywords: "",
            chapters: [["vpl_0763_000", "Program Preview", "0:22"],
            ["vpl_0763_001", "Introduction", "1:15"],
            ["vpl_0763_002", "Anatomy and Arthritis", "2:25"],
            ["vpl_0763_003", "Treatment Options", "3:58"],
            ["vpl_0763_004", "Total Hip Replacement", "1:12"],
            ["vpl_0763_005", "Preparations for Surgery", "4:58"],
            ["vpl_0763_006", "Risks and Potential Complications", "3:04"],
            ["vpl_0763_007", "The Surgical Procedure", "2:00"],
            ["vpl_0763_008", "After Your Surgery", "3:01"],
            ["vpl_0763_009", "Conclusion", "1:29"]]
        },

        "vpl_0816_001": {
            title: "Aortic Valve Replacement", keywords: "",
            chapters: [["vpl_0816_000", "Program Preview", "0:49"],
            ["vpl_0816_001", "Before Your Surgery", "4:41"],
            ["vpl_0816_002", "Aortic Valve Replacement", "4:17"],
            ["vpl_0816_003", "After Surgery", "6:36"]]
        },

        "vpl_0817_001": {
            title: "Mitral Valve Replacement", keywords: "",
            chapters: [["vpl_0817_000", "Program Preview", "0:49"],
            ["vpl_0817_001", "Before Your Surgery", "4:41"],
            ["vpl_0817_002", "Mitral Valve Replacement", "5:34"],
            ["vpl_0817_003", "After Surgery", "6:36"]]
        },

        "vpl_0861_001": {
            title: "Coronary Artery Disease", keywords: "",
            chapters: [["vpl_0861_000", "Program Preview", "0:52"],
            ["vpl_0861_001", "About the Coronary Arteries and CAD", "4:06"],
            ["vpl_0861_002", "The Signs and Symptoms of CAD", "3:55"],
            ["vpl_0861_003", "Treating the Risk Factors for CAD", "5:18"],
            ["vpl_0861_004", "Treating the Symptoms of Acute Coronary Syndrom", "3:55"],
            ["vpl_0861_005", "Long-term Treatment of CAD", "3:13"],
            ["vpl_0861_006", "Medicines for Angina", "2:54"]]
        },

        "vpl_1162_001": {
            title: "Heart Catheterization", keywords: "",
            chapters: [["vpl_1162_000", "Introduction", "0:58"],
            ["vpl_1162_001", "Before the Test", "0:35"],
            ["vpl_1162_002", "Medications", "1:40"],
            ["vpl_1162_003", "The Test", "3:19"],
            ["vpl_1162_004", "After the Test", "1:07"],
            ["vpl_1162_005", "Conclusion", "0:33"]]
        },
    },
}

export default assets
