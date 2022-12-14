import mongoose from 'mongoose';

const materialSchema = new mongoose.Schema(
    {
      title: {
        type: String,
      },
      isbn: {
        type: String
      },
      authors: {
        type: String,
      },
      publishedAt: {
        type: String
      },
      description: {
        type: String,
      },
      email: {
        type: String
      },
      firstname: {
          type: String
      },
      lastname: {
          type: String
      },
      type: {
          type: String
      }
    },
    {
      timestamps: true
    }
  )
  
  const Material = mongoose.model('materials', materialSchema);
  
  export default Material;