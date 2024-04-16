import 'package:flutter/material.dart';
import 'package:gemini_test_1/chat_screen.dart';

void main() async{
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Gemini AI ChatBot',
      home:  ChatScreen(),
    );
  }
}