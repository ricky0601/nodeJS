import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

class CameraView extends StatefulWidget {
  const CameraView({super.key});

  @override
  State<CameraView> createState() => _CameraViewState();
}

class _CameraViewState extends State<CameraView> {
  // Image Picker 인스턴스 생성
  final ImagePicker picker = ImagePicker();

  // 카메라 또는 갤러리의 이미지를 저장할 변수
  XFile? _imageFile;

  // 이미지를 가져오는 함수
  Future<void> getImage(ImageSource imageSource) async {
    try {
      // 카메라 또는 갤러리의 이미지
      final XFile? imageFile = await picker.pickImage(
          source: imageSource, maxHeight: 300, maxWidth: 300);

      if (imageFile != null) {
        // 이미지를 화면에 출력하기 위해 앱의 상태 변경
        setState(() {
          _imageFile = imageFile;
        });
      }
    } catch (e) {
      print("디버깅용 이미지 호출 에러 : $e");
    }
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Container(
        color: Colors.white,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(
                width: 300,
                height: 300,
                child: _buildPhotoArea(),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // 카메라 선택 버튼
                  ElevatedButton(
                    onPressed: () {
                      getImage(ImageSource.camera);
                    },
                    child: const Text("카메라"),
                  ),
                  const Padding(padding: EdgeInsets.all(10)),
                  // 앨범 선택 버튼
                  ElevatedButton(
                    onPressed: () {
                      getImage(ImageSource.gallery);
                    },
                    child: const Text("앨범"),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildPhotoArea() {
    // 불러온 이미지가 있는지 없는지 확인
    return _imageFile != null
        // 불러온 이미지가 있으면 출력
        ? Center(
            child: Image.file(
              File(_imageFile!.path),
            ),
          )
        // 불러온 이미지가 없으면 텍스트 출력
        : const Center(
            child: Text("불러온 이미지가 없습니다."),
          );
  }
}
