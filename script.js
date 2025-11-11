//your JS code here. If required.
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ColorRemoverApp extends JFrame {

    // 1. Declare the JComboBox (Java's equivalent of a <select> dropdown)
    private JComboBox<String> colorSelect;
    private JButton removeButton;

    public ColorRemoverApp() {
        // Set up the window (JFrame)
        setTitle("Color Remover");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout()); // Simple layout manager

        // 2. Initialize the ComboBox with colors
        String[] colors = {"Red", "Green", "White", "Black", "Blue"};
        colorSelect = new JComboBox<>(colors);
        colorSelect.setPreferredSize(new Dimension(150, 30)); // Set size for better appearance
        
        // 3. Initialize the button
        removeButton = new JButton("Select and Remove");
        
        // 4. Attach an ActionListener to the button
        removeButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                removeColor();
            }
        });
        
        // 5. Add components to the frame
        add(colorSelect);
        add(removeButton);

        // Final window setup
        pack(); // Sizes the frame to fit its components
        setLocationRelativeTo(null); // Center the window on the screen
        setVisible(true); // Make the window visible
    }

    /**
     * The method that performs the color removal logic.
     */
    private void removeColor() {
        // Get the index of the currently selected item
        int selectedIndex = colorSelect.getSelectedIndex();

        // Check if an item is selected (index will be >= 0)
        if (selectedIndex != -1) {
            // Remove the item model from the ComboBox
            colorSelect.removeItemAt(selectedIndex);
            
            // Optional: Show a confirmation message
            JOptionPane.showMessageDialog(this, "Color removed successfully!", "Success", JOptionPane.INFORMATION_MESSAGE);
        } else {
            JOptionPane.showMessageDialog(this, "Please select a color to remove.", "Warning", JOptionPane.WARNING_MESSAGE);
        }
    }

    public static void main(String[] args) {
        // Ensure the GUI is created and updated on the Event Dispatch Thread (EDT)
        SwingUtilities.invokeLater(() -> new ColorRemoverApp());
    }
}