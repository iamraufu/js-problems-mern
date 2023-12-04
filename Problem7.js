function removeDuplicates(names) {
      return [...new Set(names)];
  }
  
  const student_names = ['Zara', 'Sadia', 'Mahin', 'Adnan', 'Maisha', 'Adnan', 'Faiyaz'];
  console.log(removeDuplicates(student_names)); // Output: ['Zara', 'Sadia', 'Mahin', 'Adnan', 'Maisha', 'Faiyaz']  