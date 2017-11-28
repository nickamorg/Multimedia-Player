using System.Windows;

namespace SensorsController
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {

        public MainWindow()
        {
            InitializeComponent();
            mainContent.Children.Add(new UserControlMain());
        }
        
    }
}
