import React from 'react';

const Answers = () => {
  const quizData = [
    {
      "question": "What is the name of the king who discovered the Book of the Law during temple renovations, leading to major religious reforms in Judah?",
      "answer": "King Josiah",
      "reference": "2 Kings 22:8-11"
    },
    {
      "question": "In the Book of Numbers, who succeeded Aaron as high priest?",
      "answer": "Eleazar",
      "reference": "Numbers 20:25-28"
    },
    {
      "question": "Complete the prophecy from Amos: 'The days are coming, declares the Lord, when the reaper will be overtaken by the plowman and the planter by the one treading...'",
      "answer": "grapes",
      "reference": "Amos 9:13"
    },
    {
      "question": "What does the name 'Maher-Shalal-Hash-Baz,' the son of Isaiah, mean?",
      "answer": "'Quick to the plunder, swift to the spoil.'",
      "reference": "Isaiah 8:3"
    },
    {
      "question": "Which Psalm begins with the cry: 'Why do the nations conspire, and the peoples plot in vain?'",
      "answer": "Psalm 2",
      "reference": "Psalm 2:1"
    },
    {
      "question": "In Ezekiel’s vision of the new temple, what is the significance of the water flowing from under the threshold of the temple?",
      "answer": "It symbolizes life and healing.",
      "reference": "Ezekiel 47:1-12"
    },
    {
      "question": "Which obscure Old Testament figure is mentioned as the ancestor of the Rechabites, who were praised for their faithfulness to their forefather’s command?",
      "answer": "Jonadab son of Rechab",
      "reference": "Jeremiah 35:6-19"
    },
    {
      "question": "Complete the verse: 'In the beginning God created the heaven and the...'",
      "answer": "earth",
      "reference": "Genesis 1:1"
    },
    {
      "question": "What object did Aaron’s rod miraculously turn into before Pharaoh?",
      "answer": "A serpent",
      "reference": "Exodus 7:10"
    },
    {
      "question": "Complete the verse from Isaiah: 'But those who hope in the Lord will renew their strength. They will soar on wings like...'",
      "answer": "eagles",
      "reference": "Isaiah 40:31"
    },
    {
      "question": "What was the name of the mountain where Moses received the Ten Commandments?",
      "answer": "Mount Sinai",
      "reference": "Exodus 19:20"
    },
    {
        "question": "What is the shortest verse in the Old Testament?",
        "answer": "'You shall not kill.'",
        "reference": "Exodus 20:13"
      },
      {
        "question": "Who is the prophet that had a vision of a valley of dry bones?",
        "answer": "Ezekiel",
        "reference": "Ezekiel 37:1-14"
      },
      {
        "question": "Who was the father of King David?",
        "answer": "Jesse",
        "reference": "1 Samuel 16:10-13"
      },
      {
        "question": "Complete the verse: 'For the mystery of lawlessness is already at work; only he who now restrains it will do so until he is...'",
        "answer": "taken out of the way",
        "reference": "2 Thessalonians 2:7"
      },
      {
        "question": "In which New Testament letter is the phrase 'faith without works is dead' found, and what example is given to illustrate this?",
        "answer": "James 2:26; examples include Abraham offering Isaac and Rahab hiding the spies.",
        "reference": "James 2:26"
      },
      {
        "question": "What is the name of the woman mentioned in Romans 16 who is called a deacon of the church in Cenchreae?",
        "answer": "Phoebe",
        "reference": "Romans 16:1"
      },
      {
        "question": "What specific event is referenced in Jude 9, involving the Archangel Michael?",
        "answer": "Michael disputing with the devil over the body of Moses.",
        "reference": "Jude 9"
      },
      {
        "question": "According to the Book of Hebrews, Melchizedek is described as 'without father, without mother, without genealogy.' Why is he compared to Christ?",
        "answer": "He remains a priest forever.",
        "reference": "Hebrews 7:3"
      },
      {
        "question": "In the Parable of the Ten Virgins, what did the foolish virgins fail to bring?",
        "answer": "Extra oil for their lamps.",
        "reference": "Matthew 25:3"
      },
      {
        "question": "Which epistle warns against the teaching of Balaam and mentions the Nicolaitans?",
        "answer": "Revelation, specifically to the church in Pergamum.",
        "reference": "Revelation 2:14-15"
      },
      {
        "question": "Who was the Roman governor who sentenced Jesus to death?",
        "answer": "Pontius Pilate",
        "reference": "John 19:16"
      },
      {
        "question": "What were the last words of Jesus on the cross according to the Gospel of John?",
        "answer": "'It is finished.'",
        "reference": "John 19:30"
      },
      {
        "question": "What is the last book of the Bible?",
        "answer": "Revelation",
        "reference": "Revelation 1:1"
      },
      {
        "question": "What were the names of Job’s three friends who came to 'comfort' him?",
        "answer": "Eliphaz, Bildad, and Zophar",
        "reference": "Job 2:11"
      },
      {
        "question": "Complete the verse: 'Blessed are the poor in spirit, for theirs is the...'",
        "answer": "kingdom of heaven",
        "reference": "Matthew 5:3"
      },
      {
        "question": "Which New Testament book contains the 'fruit of the Spirit' and what are they?",
        "answer": "Galatians 5:22-23; Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.",
        "reference": "Galatians 5:22-23"
      },
      {
        "question": "Who betrayed Jesus for 30 pieces of silver?",
        "answer": "Judas",
        "reference": "Matthew 26:15"
      },
      {
        "question": "What was Jesus' first miracle?",
        "answer": "Turning water into wine.",
        "reference": "John 2:1-11"
      },
      {
        "question": "Complete the verse: 'For where two or three gather in my name, there am I with...'",
        "answer": "them",
        "reference": "Matthew 18:20"
      }  
    // Add all other quiz items similarly...
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz Questions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Question</th>
              <th className="px-4 py-2 border">Answer</th>
              <th className="px-4 py-2 border">Reference</th>
            </tr>
          </thead>
          <tbody>
            {quizData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{item.question}</td>
                <td className="px-4 py-2">{item.answer}</td>
                <td className="px-4 py-2">{item.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Answers;
