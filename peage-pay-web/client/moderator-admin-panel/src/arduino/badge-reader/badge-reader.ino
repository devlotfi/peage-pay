#include <SPI.h>
#include <MFRC522.h>
#include <Servo.h>

#define SS_PIN 10
#define RST_PIN 9
#define BUZZER_PIN 2
#define GREEN_LED_PIN 4
#define RED_LED_PIN 5

MFRC522 mfrc522(SS_PIN, RST_PIN);

Servo servo;

void setup() {
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(GREEN_LED_PIN, OUTPUT);
  pinMode(RED_LED_PIN, OUTPUT);
  digitalWrite(RED_LED_PIN, HIGH);

  servo.attach(3);
  servo.write(180);

  Serial.begin(9600);
  SPI.begin();
  mfrc522.PCD_Init();
}

void loop() {
  // Look for new cards
  if (mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial()) {
    // Create a string to store the UID
    String uidString;

    // Iterate over the UID bytes and build the string
    for (byte i = 0; i < mfrc522.uid.size; i++) {
      uidString.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
      uidString.concat(String(mfrc522.uid.uidByte[i], HEX));
    }
    uidString.trim();
    uidString.replace(" ", "");
    uidString.replace("\t", "");
    uidString.replace("\n", "");
    uidString.replace("\r", "");
    uidString.toUpperCase();

    // Print the UID string
    Serial.print("BADGE_DETECTED ");
    Serial.print("{");
    Serial.print(uidString);
    Serial.println("}");
    
    // Turn the buzzer on
    
    digitalWrite(GREEN_LED_PIN, HIGH);
    digitalWrite(RED_LED_PIN, LOW);
    // Wait for a short duration
    servo.write(90);
    delay(2000);
    servo.write(180);
    // Turn the buzzer off
    digitalWrite(BUZZER_PIN, LOW);
    digitalWrite(GREEN_LED_PIN, LOW);
    digitalWrite(RED_LED_PIN, HIGH);
    
    mfrc522.PICC_HaltA(); // Stop reading
  }
}
