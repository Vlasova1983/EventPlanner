import * as Yup from 'yup';


const AddFormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')    
    .required('invalid input'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(300, 'Too Long!')    
    .required('invalid input'),
  location:Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')    
    .required('invalid input'),
  category:Yup.string()   
    .required('invalid input'),
  priority:Yup.string()        
    .required('invalid input'),
  date:Yup.string()        
    .required('invalid input'),
  time:Yup.string()        
    .required('invalid input'), 
});

export default AddFormSchema;

